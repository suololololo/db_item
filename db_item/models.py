from django.db import models

# Create your models here.

class User(models.Model):
    user_name = models.CharField(max_length=128,unique=True,primary_key=True)
    user_password = models.CharField(max_length=256)
    pub_date = models.DateTimeField('date published',auto_now_add=True)
    def __str__(self):
        return self.user_name

class Seller(models.Model):
    seller_name = models.CharField(max_length=128,unique=True,primary_key=True)
    seller_password = models.CharField(max_length=256)
    pub_date = models.DateTimeField('date published',auto_now_add=True)
    def __str__(self):
        return self.seller_name