      var   selectItem = function (id) {
    document.querySelector('.input-id').value = id
      console.log(id)
}


window.onload=function(){

    var btn=document.getElementById("btn-submit");

    btn.onclick=function(){
        // alert("已成功加入购物车！");




    }
        //初始化接收返回数据的变量
    var info=null;
        var str=window.location.href;

   var ending=str.substring(30);
    //发送ajax请求的链接
     var url="/get_json/"+ending;
    console.log(url)

    var xhr=new XMLHttpRequest();

    xhr.onreadystatechange=function(){
        if(xhr.readyState==4)
        {
            if((xhr.status>=200 && xhr.status<300)||xhr.status==304)
            {//请求成功，返回数据
                //将返回的数据转换为JSON格式，保存在info中
                info=JSON.parse(xhr.responseText);
            }else{//请求失败
                alert("Request was unsuccessful:"+xhr.status);
            }

        }
    }

    xhr.open("GET",url,true);
    xhr.send();
var options=document.getElementsByName("attribute");

    //遍历单选框input，为每个input都绑定点击事件
        //遍历单选框input，为每个input都绑定点击事件
    for(var i=0;i<options.length;i++)
    {
        //用于保存当前下标
        var flag=0;

        //用于保存当前规格的商品id
        var id="";

        options[i].onclick=function()
        {
                    selectItem(this.id);
            var value=this.value;

            //遍历info对象，找出对应的下标
            for (var val in info) {
                if(val=='attributes')
                {
                    for(var j=0;j<info[val].length;j++)
                    {
                        if(info[val][j]==value)
                        {
                            flag=j;
                            break;
                        }
                    }
                }
            }

            //遍历info对象，找出对应的价格、库存和商品ID
            for(var val in info){
                if(val=='prices')
                {
                    document.getElementById('price').innerHTML="白银价：￥"+info[val][flag];
                    
                }

                if(val=='inventory')
                {
                    document.getElementById('inventory').innerHTML="库存："+info[val][flag];
                }

                
            }

        }

        
    }




}





