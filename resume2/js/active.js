// 
function active(elm,strMT,actMT,speed){
    var box=elm;
    // var startHeight=parseInt(box.style.marginTop);
    // console.log(startHeight);
    box.style.marginTop=actMT;
    var height=parseInt(box.style.marginTop);           
    console.log(height);
    var timer=setInterval(function(){
        height=height-speed;
        box.style.marginTop=height+"px";
        console.log(height);
        if(height<=parseInt(strMT)){
            clearInterval(timer);
        }
    },10)
}