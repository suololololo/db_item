window.onload=function(){

    //展开or收起详细信息的功能begin
    var unfold=document.getElementsByClassName("unfold");
    

    for(var i=0;i<unfold.length;i++)
    {
        unfold[i].flag=0;
        unfold[i].index=i;

        unfold[i].onclick=function()
        {
            var sub=document.getElementsByClassName("sub")[this.index];

            if(this.flag==0)
            {
                sub.style.display="block";
                this.flag=1;
                this.innerHTML="收起详细信息";
            }else{
                sub.style.display="none";
                this.flag=0;
                this.innerHTML="展开详细信息";
            }

        }

    }

    

    //监听价格是否被修改的功能begin
    var priceinput=document.getElementsByClassName("price");

    for(var i=0;i<priceinput.length;i++)
    {
        //为input设置属性，标记为1说明被修改过
        priceinput[i].dirty=0;

        priceinput[i].oninput=function()
        {
            this.dirty=1;
        }
    }//监听价格是否被修改的功能end

    //监听库存是否被修改的功能begin
    var inventoryinput=document.getElementsByClassName("inventory");

    for(var i=0;i<inventoryinput.length;i++)
    {
        inventoryinput[i].dirty=0;

        inventoryinput[i].oninput=function()
        {
            this.dirty=1;
        }
    }//监听库存是否被修改的功能end


    //修改商品规格信息的功能begin
    var modifyBtn=document.getElementsByClassName("save");

    for(var i=0;i<modifyBtn.length;i++){

        modifyBtn[i].index=i;

        modifyBtn[i].onclick=function()
        {
            //获取对应商品的“详细信息”
            var sub=document.getElementsByClassName("sub")[this.index];

            var skus=sub.getElementsByClassName("sku");

            //获取这个商品中的所有价格input框
            var prices=sub.getElementsByClassName("price");
            
            //获取这个商品中的所有库存input框
            var inventorys=sub.getElementsByClassName("inventory");
            
            var data=[];

            for(var j=0;j<prices.length;j++)
            {
                if(prices[j].dirty==1||inventorys[j].dirty==1){
                    var item={};
                    item.goodid=skus[j].id;
                    item.price=prices[j].value;
                    item.inventory=inventorys[j].value;
                    data.push(item);
                }
            }

            var result=JSON.stringify(data);
            //测试打包数据
            // console.log(result);

            $.ajax({
                type : "post",
    
                url : '/backstage/',//后台请求地址
    
                data : result,
    
                header:{ 'X-CSRFTOKEN': '{{csrf_token}}' },
    
                contentType: "application/json", 
    
                async : false,
    
                success : function(){    },
    
                error :function(){alert("修改失败");}
    
            });
        }
    }

    
}

    