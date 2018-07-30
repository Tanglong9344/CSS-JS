/*改变文本*/
function changeText(){
	x=document.getElementById("text-style");
	if(x.innerHTML.match("嘿嘿")){
	  x.innerHTML="大家好，我是曹操。"; 
	}else{
	  x.innerHTML="嘿嘿，我会变化。";
	}
}

/*改变样式*/
function changeStyle(){
	x=document.getElementById("text-style");
	x.style.color="#ff0000";
	x.style.fontSize="30px";
	x.style.border="2px soild green";
	x.style.textAlign="center";
	x.style.textShadow="5px 5px 4px gray";
}

/*改变图片*/
function changeImage(){
	x=document.getElementById("bulb");
	if(x.src.match("bulbon")){
		 x.src="picture/bulboff.gif";
	  }else{
		x.src="picture/bulbon.gif";
	 }
}

/*闪烁的文字*/
function blinkText(){
	var x=document.getElementById("btext");
	if ("red" == x.style.color){
		x.style.color="black";
	}else{
		x.style.color="red";
	}
	//0.1s刷新一次
	timer=setTimeout("blinkText()",100);
}

/*移除文档*/
function removeText(){
	//消除原来页面
	//刷新页面返回
	document.write("<button onclick='javascript:location.reload(true);'>返回</button>");       
}

/*简单计算器*/
function calculator(operator){
	//两个操作数
	var a=Number(document.getElementById("inputa").value);
	var b=Number(document.getElementById("inputb").value);
	//结果
	var result=document.getElementById("result");
	//数字判断
	if(0 == numJudge(a) || 0 == numJudge(b)){
		return;
	}
	//运算
	switch(operator.value){
		case '+':
			result.innerHTML=a+b;
			break;
		case '-':
			result.innerHTML=a-b;
			break;
		case '*':
			result.innerHTML=a*b;
			break;
		case '/':
			result.innerHTML=a/b;
			break;
		default:
			break;
	} 
     
}

/*输入判断*/
function numJudge(val){
	if("" == val || null == val || isNaN(val)){
		alert("请输入数字!");
		return 0;
	  }   
}

/*时间*/
function cur_time(){
  var x=document.getElementById("tim");
  var time=new Date().getHours();
  if(time > 8 && time < 22){
     x.innerHTML="Happy Day!<br/>It's "+time+" o'clock";
  }else{
     x.innerHTML="It is "+time+" o'clock.<br/>You should have been asleep.";
  }
}

/*访问标签*/
function visitTag(){
  var t = document.getElementsByTagName("div");
  var x = document.getElementById("tag");
  x.innerHTML="第一个div是:"+t[0].innerHTML;
}

/*计时器*/
var c=0;
var t;
/*开始计时*/
function timedCount(){
	//初始化
	document.getElementById('txt').value=c;
	c=c+1;
	//每一秒加1
	t=setTimeout("timedCount()",1000);
}
/*停止计时*/
function stopCount(){
	clearTimeout(t);
}
/*重新计时*/
function clearCount(){
	clearTimeout(t);
	c=0;
	timedCount();
}

/*显示钟表*/
function clock(){
	var today=new Date();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById("clock").innerHTML=h+":"+m+":"+s;
	t=setTimeout("clock()",10);
}

/*小于10的数字前面补0*/
function checkTime(i){
	if (i<10) {
		i="0" + i;
	}
	return i;
}

/*转为大写*/
function onChange(){
  var x = document.getElementById("al");
  x.value=x.value.toUpperCase();  
}

/*按下鼠标*/
function mDown(obj){
  obj.style.backgroundColor="#550";
  obj.innerHTML="释放鼠标";
}

/*释放鼠标*/
function mUp(obj){
  obj.style.backgroundColor="#0f0";
  obj.innerHTML="按下鼠标";
}

/*浏览器窗口宽度和高度*/
function bomWin(){
  var x = document.getElementById("win");
  var w=window.innerWidth;
  var h=window.innerHeight;
  x.innerHTML="窗口:<br/>高度:"+h+"<br/>宽度:"+w;
}

/*浏览器屏幕宽度*/
function bomScr(){
  var x = document.getElementById("scr");
  var w=screen.availWidth;
  var h=screen.availHeight;
  x.innerHTML="屏幕:<br/>高度:"+h+"<br/>宽度:"+w;
}


/*浏览器对象模型之Location*/
function bomLoc(){
  var x = document.getElementById("loc");
  var txt="";
  var href=location.href;
  var path=location.pathname;
  var hostn=window.location.hostname;
  var port=window.location.port;
  var pro=location.protocol;
  txt +="href:"+href+"<br/>"+"path:"+path+"<br/>"+"hostname:"
		+hostn+"<br/>"+"port:"+port+"<br/>"+"pro:"+pro;
  x.innerHTML=txt;
}

/*确认框*/
function show_confirm(){
	var r=confirm("确认OR取消");
	if (true == r){
		var r1=confirm("你点击了确定。\n确认OR取消");
		if (true == r1){
			alert("你点击了确定。");
		}else{
			alert("你点击了取消。");
		}
	}else{
		var r1=confirm("你点击了取消.\n确认OR取消");
		if (true == r1){
			alert("你点击了确定。");
		}else{
			alert("你点击了取消。");
		}
	}
}

/*提示框*/
function dp_prompt(){
  var name=prompt("请输入姓名","唐龙");
  if (null != name && "" != name){
    document.getElementById("prompt").innerHTML="你好，" + name + "欢迎到此一游。";
  }
}

