window.onload=function(){
    // 获取top导航条
    var top=document.getElementsByClassName("top")[0];
    var onlyTop = 1;//控制导航条动画只执行一次
    // 获取skills div
    var skills=document.getElementsByClassName("skills")[0];
    var onlySkills=1;//控制skills动画只执行一次
    // 获取照片div
    var photo=document.getElementsByClassName("photo");
    var onlyPhoto=[1,1,1,1];//控制skills动画只执行一次
    var education=document.getElementsByClassName("education");
    var onlyEducation=[1,1,1,1];
    // 监听滚轮实现导航条颜色的切换以及div上滑动画
    if(typeof document.body.onmousewheel=="object"){ //chrome及其他浏览器
        document.body.onmousewheel=function(e){
            e=e || window.event;
            var scrollTop=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;//兼容浏览器获取滚动条高度
            // console.log(scrollTop);
            // 导航条颜色切换以及上滑动画
            if(e.wheelDelta < 0&&scrollTop >450){
            top.style.backgroundColor="#378c3f";
                // console.log(only);
                if(onlyTop==1){
                    active(top,"0px","50px",1,8);
                    onlyTop = 2;
                }            
            }
            if(e.wheelDelta > 0&&scrollTop <450){
                top.style.backgroundColor="transparent";
                onlyTop=1;
                onlySkills=1;
                onlyPhoto=[1,1,1,1];
                onlyEducation=[1,1,1,1];
            }
            // Skills上滑动画            
            if(e.wheelDelta < 0&&scrollTop >100){
                if(onlySkills==1){
                    active(skills,"0px","80px",1,5);
                    onlySkills = 2;
                }            
            }
            // 照片上滑动画
            if(e.wheelDelta < 0&&scrollTop >490){
                for(i=0;i<photo.length;i++){
                    if(onlyPhoto[i]==1){
                    active(photo[i],"20px","100px",1,5);
                    onlyPhoto[i]=2;
                    }
                }
            }
            // 经历上滑动画
            if(e.wheelDelta < 0&&scrollTop >1400){
                if(onlyEducation[0]==1){
                    active(education[0],"0px","80px",1,10);
                    onlyEducation[0]=2;
                }                
            }
            if(e.wheelDelta < 0&&scrollTop >1450){
                if(onlyEducation[1]==1){
                    active(education[1],"20px","80px",1,10);
                    onlyEducation[1]=2;
                }                
            }
            if(e.wheelDelta < 0&&scrollTop >1500){
                if(onlyEducation[2]==1){
                    active(education[2],"20px","80px",1,10);
                    onlyEducation[2]=2;
                }                
            }
            if(e.wheelDelta < 0&&scrollTop >1550){
                if(onlyEducation[3]==1){
                    active(education[3],"20px","80px",1,10);
                    onlyEducation[3]=2;
                }                
            }
        }                
    }
    else{//兼容firefox
        document.body.addEventListener("DOMMouseScroll",function(e){
            e=e || window.event;
            var scrollTop=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
            if(e.detail > 0&&scrollTop >450){
                top.style.backgroundColor="#378c3f";
                if(onlyTop==1){
                    active(top,"0px","50px",1,8);
                    onlyTop = 2;
                }            
            }        
            if(e.detail < 0&&scrollTop <450){
                top.style.backgroundColor="transparent";
                onlyTop=1;
                onlySkills = 1;
                onlyPhoto=[1,1,1,1];
                onlyEducation=[1,1,1,1];

            }
            if(e.detail > 0&&scrollTop >100){
                if(onlySkills==1){
                    active(skills,"0px","80px",1,5);
                    onlySkills = 2;
                }            
            }
            if(e.detail > 0&&scrollTop >400){
                for(i=0;i<photo.length;i++){
                    if(onlyPhoto[i]==1){
                    active(photo[i],"20px","100px",1,5);
                    onlyPhoto[i]=2;
                    }
                }
            }
            if(e.detail > 0&&scrollTop >1310){
                if(onlyEducation[0]==1){
                    active(education[0],"0px","80px",1,10);
                    onlyEducation[0]=2;
                }                
            }
            if(e.detail > 0&&scrollTop >1360){
                if(onlyEducation[1]==1){
                    active(education[1],"20px","80px",1,10);
                    onlyEducation[1]=2;
                }                
            }
            if(e.detail > 0&&scrollTop >1410){
                if(onlyEducation[2]==1){
                    active(education[2],"20px","80px",1,10);
                    onlyEducation[2]=2;
                }                
            }
            if(e.detail > 0&&scrollTop >1460){
                if(onlyEducation[3]==1){
                    active(education[3],"20px","80px",1,10);
                    onlyEducation[3]=2;
                }                
            }        
        },false)
    }

    

    // div上滑动画
    function active(elm,strMT,actMT,speed,millisecond){
        clearInterval(timer);
        var box=elm;
        // var startHeight=parseInt(box.style.marginTop);
        // console.log(startHeight);
        box.style.marginTop=actMT;
        var height=parseInt(box.style.marginTop);           
        // console.log(height);
        var timer=setInterval(function(){
            height=height-speed;
            box.style.marginTop=height+"px";
            // console.log(height);
            if(height<=parseInt(strMT)){
                clearInterval(timer);
            }
        },millisecond)
    }
}