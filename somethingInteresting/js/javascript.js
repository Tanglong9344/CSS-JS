/*�ı��ı�*/
function changeText(){
	x=document.getElementById("text-style");
	if(x.innerHTML.match("�ٺ�")){
	  x.innerHTML="��Һã����ǲܲ١�"; 
	}else{
	  x.innerHTML="�ٺ٣��һ�仯��";
	}
}

/*�ı���ʽ*/
function changeStyle(){
	x=document.getElementById("text-style");
	x.style.color="#ff0000";
	x.style.fontSize="30px";
	x.style.border="2px soild green";
	x.style.textAlign="center";
	x.style.textShadow="5px 5px 4px gray";
}

/*�ı�ͼƬ*/
function changeImage(){
	x=document.getElementById("bulb");
	if(x.src.match("bulbon")){
		 x.src="picture/bulboff.gif";
	  }else{
		x.src="picture/bulbon.gif";
	 }
}

/*��˸������*/
function blinkText(){
	var x=document.getElementById("btext");
	if ("red" == x.style.color){
		x.style.color="black";
	}else{
		x.style.color="red";
	}
	//0.1sˢ��һ��
	timer=setTimeout("blinkText()",100);
}

/*�Ƴ��ĵ�*/
function removeText(){
	//����ԭ��ҳ��
	//ˢ��ҳ�淵��
	document.write("<button onclick='javascript:location.reload(true);'>����</button>");       
}

/*�򵥼�����*/
function calculator(operator){
	//����������
	var a=Number(document.getElementById("inputa").value);
	var b=Number(document.getElementById("inputb").value);
	//���
	var result=document.getElementById("result");
	//�����ж�
	if(0 == numJudge(a) || 0 == numJudge(b)){
		return;
	}
	//����
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

/*�����ж�*/
function numJudge(val){
	if("" == val || null == val || isNaN(val)){
		alert("����������!");
		return 0;
	  }   
}

/*ʱ��*/
function cur_time(){
  var x=document.getElementById("tim");
  var time=new Date().getHours();
  if(time > 8 && time < 22){
     x.innerHTML="Happy Day!<br/>It's "+time+" o'clock";
  }else{
     x.innerHTML="It is "+time+" o'clock.<br/>You should have been asleep.";
  }
}

/*���ʱ�ǩ*/
function visitTag(){
  var t = document.getElementsByTagName("div");
  var x = document.getElementById("tag");
  x.innerHTML="��һ��div��:"+t[0].innerHTML;
}

/*��ʱ��*/
var c=0;
var t;
/*��ʼ��ʱ*/
function timedCount(){
	//��ʼ��
	document.getElementById('txt').value=c;
	c=c+1;
	//ÿһ���1
	t=setTimeout("timedCount()",1000);
}
/*ֹͣ��ʱ*/
function stopCount(){
	clearTimeout(t);
}
/*���¼�ʱ*/
function clearCount(){
	clearTimeout(t);
	c=0;
	timedCount();
}

/*��ʾ�ӱ�*/
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

/*С��10������ǰ�油0*/
function checkTime(i){
	if (i<10) {
		i="0" + i;
	}
	return i;
}

/*תΪ��д*/
function onChange(){
  var x = document.getElementById("al");
  x.value=x.value.toUpperCase();  
}

/*�������*/
function mDown(obj){
  obj.style.backgroundColor="#550";
  obj.innerHTML="�ͷ����";
}

/*�ͷ����*/
function mUp(obj){
  obj.style.backgroundColor="#0f0";
  obj.innerHTML="�������";
}

/*��������ڿ�Ⱥ͸߶�*/
function bomWin(){
  var x = document.getElementById("win");
  var w=window.innerWidth;
  var h=window.innerHeight;
  x.innerHTML="����:<br/>�߶�:"+h+"<br/>���:"+w;
}

/*�������Ļ���*/
function bomScr(){
  var x = document.getElementById("scr");
  var w=screen.availWidth;
  var h=screen.availHeight;
  x.innerHTML="��Ļ:<br/>�߶�:"+h+"<br/>���:"+w;
}


/*���������ģ��֮Location*/
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

/*ȷ�Ͽ�*/
function show_confirm(){
	var r=confirm("ȷ��ORȡ��");
	if (true == r){
		var r1=confirm("������ȷ����\nȷ��ORȡ��");
		if (true == r1){
			alert("������ȷ����");
		}else{
			alert("������ȡ����");
		}
	}else{
		var r1=confirm("������ȡ��.\nȷ��ORȡ��");
		if (true == r1){
			alert("������ȷ����");
		}else{
			alert("������ȡ����");
		}
	}
}

/*��ʾ��*/
function dp_prompt(){
  var name=prompt("����������","����");
  if (null != name && "" != name){
    document.getElementById("prompt").innerHTML="��ã�" + name + "��ӭ����һ�Ρ�";
  }
}

