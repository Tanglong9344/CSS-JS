//���ת����pxת��Ϊrem
/*
	DOM�ĵ����صĲ���Ϊ
	1.����HTML�ṹ��
	2.�����ⲿ�ű�����ʽ���ļ���
	3.������ִ�нű����롣
	4.DOM��������ɡ�//DOMContentLoaded
	5.����ͼƬ���ⲿ�ļ���
	6.ҳ�������ϡ�//load
*/
//addEventListener ����
/*
��һ���������¼�������
�ڶ����������¼���������õĺ�����
�����������Ǹ�����ֵ���������¼���ð��(false)���ǲ���(true)���ò����ǿ�ѡ�ġ�
*/
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',//��Ļת��
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 640) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
			}
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

function imgChange(obj1, obj2) {
	//��ȡ������ı���
	var file = document.getElementById("file");
	//���ͼƬ�ĸ���Ԫ��
	var imgContainer = document.getElementsByClassName(obj1)[0];
	//�ı���ĸ���Ԫ��
	var input = document.getElementsByClassName(obj2)[0];
	//��ȡ��ͼƬ�ļ�
	var fileList = file.files;
	//������ȡ����ͼƬ�ļ�
	for (var i = 0; i < fileList.length; i++) {
		var imgAdd = document.createElement("div");
		var img = document.createElement("img");
		var imgUrl = window.URL.createObjectURL(file.files[i]) ;
		img.setAttribute("src", imgUrl);
		imgAdd.setAttribute("class", "z_addImg");
		imgAdd.appendChild(img);
		imgContainer.appendChild(imgAdd);
	};
	//ͼƬ�������
	imgRemove();
};

function imgRemove() {
	var imgList = document.getElementsByClassName("z_addImg");
	var mask = document.getElementsByClassName("z_mask")[0];
	var cancel = document.getElementsByClassName("z_cancel")[0];
	var sure = document.getElementsByClassName("z_sure")[0];
	for (var j = 0; j < imgList.length; j++) {
		imgList[j].onclick = function() {
			var t = this;//��ȡ��ǰԪ�ض���
			mask.style.display = "block";
			cancel.onclick = function() {
				mask.style.display = "none";
			};
			sure.onclick = function() {
				mask.style.display = "none";
				//ɾ��Ԫ��
				t.parentNode.removeChild(t);
			};
		}
	};
};
