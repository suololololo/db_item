from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.db import models
from db_item import models
# Create your views here.

def index(request):
    return HttpResponse('this is index')

def login(request):
    if request.session.get('is_login', None):
        return redirect('/index')
    if request.method== 'POST':
        buyer_or_seller = request.POST.get('role')
        username = request.POST.get('username')
        password = request.POST.get('password')
        message='请填写所有字段'
        if username and password:
            username=username.strip()
            if buyer_or_seller=='user':
                try:
                    user = models.User.objects.get(user_name=username)
                    if user.user_password==password :
                        request.session['is_login'] = True
                        # request.session['user_id'] = user.id
                        request.session['user_username'] = user.user_name
                        return redirect('/index')
                    else:
                        message='密码不正确'
                except:
                    message='用户名不存在'
            elif buyer_or_seller=='seller':
                try:
                    seller = models.Seller.objects.get(seller_name=username)
                    if seller.seller_password == password:
                        request.session['is_login'] = True
                        # request.session['user_id'] = user.id
                        request.session['sell_sellname'] = seller.seller_name
                        return redirect('/index')
                    else:
                        message = '密码不正确'
                except:
                    message = '用户名不存在'
        return render(request, '../static/html/login.html', {"message":message})
    return render(request, '../static/html/login.html')

def register(request):
    if request.method=='POST':
        message=''
        buyer_or_seller = request.POST.get('role')
        username = request.POST.get('username')
        password1 = request.POST.get('password')
        password2 = request.POST.get('password2')
        if username and password1 and password2:
            username = username.strip()
            if password1!=password2:
                message = '两次密码输入不同'
                return render(request, '../static/html/register.html', {"message": message})
            else:
                if buyer_or_seller=='user':
                    if models.User.objects.filter(user_name=username):
                        message='用户已经存在,'
                        return render(request, '../static/html/register.html', {"message":message})

                    new_user = models.User.objects.create()
                    new_user.user_name = username
                    new_user.user_password = password1
                    new_user.save()
                if buyer_or_seller=='seller':
                    if models.Seller.objects.filter(seller_name=username):
                        message = '用户已经存在,'
                        return render(request, '../static/html/register.html', {"message": message})
                    new_seller = models.Seller.objects.create()
                    new_seller.seller_name= username
                    new_seller.seller_password = password1
                    new_seller.save()
        return redirect('/login/')
    return render(request, '../static/html/register.html')

def logout(request):
    if not request.session.get('is_login',None):
        return redirect('/index')
    request.session.flush()
    return redirect('/index')