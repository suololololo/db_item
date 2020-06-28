window.onload=function(){


    //设置imgList的自适应宽度
    var imgList=document.getElementById('imgList');
    var imgArr=imgList.getElementsByTagName('img');

    //设置ul的宽度为图片个数*每个li的宽度
    //每个li的宽度=每张图片的宽度+margin-left+marghin-right
    imgList.style.width=610*imgArr.length+'px';


    //设置导航按钮居中
    var navDiv=document.getElementById('nav');
    var outer=document.getElementsByClassName('content-mid')[0];

    navDiv.style.left=(outer.offsetWidth-navDiv.offsetWidth)/2+'px';

    //设置超链接a默认在第一个
    var allA=navDiv.getElementsByTagName('a');

    var index=0;;//index为图片的索引

    allA[index].style.backgroundColor='white';


    //功能：点击链接切换到对应的图片
    for(var i=0;i<allA.length;i++)
    {
        //为每个超链接添加一个num属性，绑定编号
        allA[i].num=i;

        allA[i].onclick=function()
        {
            //获取被点击的超链接的索引-this.num
            index=this.num;

            //切换图片
            imgList.style.left=-(610*index)+'px';

            //修改超链接背景颜色
            setA();
        };
    }


    //用来设置超链接背景颜色的方法
    function setA()
    {
        //先将所有的a背景颜色都设置成silver
        for( var i=0;i<allA.length;i++)
        {
            allA[i].style.backgroundColor='';
            //空串的目的是为了让其遵循默认样式
        }

        //再将当前显示的a的背景颜色设置成white
        allA[index].style.backgroundColor='white';
    }


    //设置左右按键< >
    var btnLeft=this.document.getElementById('btn-left');
    var btnRight=this.document.getElementById('btn-right');

    btnLeft.onclick=function()
    {
        index=imgList.offsetLeft/(-610);

        if(index==0)//当前处于第一张图片
        {
            imgList.style.left=-1220+'px';
            index=imgArr.length-1;
        }else
        {
            imgList.style.left=imgList.offsetLeft+610+'px';
            index--;
        }

        setA();
    };

    btnRight.onclick=function()
    {

        index=imgList.offsetLeft/(-610);

        if(index==imgArr.length-1)//当前处于最后一张图片
        {
            imgList.style.left=0;
            index=0;
        }else
        {
            imgList.style.left=imgList.offsetLeft-610+'px';
            index++;
        }

        setA();
    };
};