
        
    //当用户名输入框获得焦点时，提醒用户输入6位数字
    function oFocus_1(){
               
        document.getElementById("remind_1").innerHTML="请输入长度为6位的字母、数字组合";
        
    }

    //当密码输入框获得焦点时，提醒用户输入6位字符
    function oFocus_2(){
        
        document.getElementById("remind_2").innerHTML="请输入长度为6位的字母、数字组合";
    
    }


    //当用户名输入框失去焦点时，验证是否为空
    function oBlur_1(){
        var oUsername = document.getElementById("username").value;

        if(oUsername.length==0)
        {
            document.getElementById("remind_1").innerHTML="用户名称/商家名称不能为空！";
        }else if(oUsername.length==6)
        {
            document.getElementById("remind_1").innerHTML="";
        }else
        {
            document.getElementById("remind_1").innerHTML="请输入长度为6位的字母、数字组合";
        }
    }

    //当密码输入框失去焦点时，验证是否为空
    function oBlur_2(){
        var oPassword = document.getElementById("password").value;

        if(oPassword.length==0)
        {
            document.getElementById("remind_2").innerHTML="密码不能为空！";
        }else if(oPassword.length==6)
        {
            document.getElementById("remind_2").innerHTML="";
        }else
        {
            document.getElementById("remind_2").innerHTML="请输入长度为6位的字母、数字组合";
        }
    }



