
function getStyle(obj,attr){
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else{
		return getComputedStyle(obj,false)[attr];
	}
}

function css(obj,attr,value){
	if(arguments.length==2){
		return getStyle(obj,attr);
	}
     else if(arguments.length==3){
         obj.style[attr]=value;
     }
}

window.onload=function(){
	var oBox=document.getElementById("box");
	var oBtn=document.getElementById("btn");
	var oSp=document.getElementById("sp");
	oBtn.onclick=function(){
		//获取oBOX的宽度
		oSp.innerHTML="高度:"+css(oBox,'height');
		//设置box的背景颜色为绿色
		css(oBox,'background','green')
		css(oBox,'width','300px');
	};
};
