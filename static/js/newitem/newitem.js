function preview(file,img)
{  
    var prevDiv = document.getElementById(img);  

    if (file.files && file.files[0]){     
        var size = file.files[0].size;
        if(size > 2 * 1024*1024){
            alert("上传大小不符合");
            return false;
        }
         // 获取文件名 包含后缀  
         var src = file.files[0].name;  
         // 获取文件后缀                                                      
         var type=(src.substr(src.lastIndexOf("."))).toLowerCase(); 
        // 判断文件类型                                   
        if(type != ".jpg" && type != ".gif" && type !=".jpeg" && type != ".png"){           
            alert("您上传图片的类型不符合(.jpg|.jpeg|.gif|.png)！");
            return false;
        }
          
        var reader = new FileReader(); 

        //将文件以Data URL形式读入页面
        reader.readAsDataURL(file.files[0]); 

        //onload 成功读取后 显示图片           
        reader.onload = function(evt){                  
            prevDiv.innerHTML = '<img src="' + evt.srcElement.result + '" style="max-width:220px;" />';             
        }  
    }  
}

 $(function(){
    
     $('#btn-submit').click(function()
    {
        
        // 用表单来初始化
        var formData = new FormData($("#new")[0]);

        //将图片文件对象添加到formData中        
        formData.append('img', $("#pic")[0].files[0]); 
        formData.append('csrfmiddlewaretoken', '{{ csrf_token }}');

        
        $.ajax({
            type : 'post',
            url : '/newitem/',//这里写后端处理的url
            // headers: {
            //     'X-CSRFTOKEN': '{{csrf_token}}'
            // }
            data : formData,
            cache : false,
            async: false,
            processData : false, // 不处理发送的数据，因为data值是Formdata对象，不需要对数据做处理
            contentType : false, // 不设置Content-type请求头
            success : function()
            {

            },
            error : function(){alert("商品信息上传失败！"); }
        })

    });
 });
