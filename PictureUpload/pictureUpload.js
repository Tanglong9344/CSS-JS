//相对转换：px转换为rem
/*
	DOM文档加载的步骤为
	1.解析HTML结构。
	2.加载外部脚本和样式表文件。
	3.解析并执行脚本代码。
	4.DOM树构建完成。//DOMContentLoaded
	5.加载图片等外部文件。
	6.页面加载完毕。//load
*/
//addEventListener 参数
/*
第一个参数是事件的类型
第二个参数是事件触发后调用的函数。
第三个参数是个布尔值用于描述事件是冒泡(false)还是捕获(true)。该参数是可选的。
*/
(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',//屏幕转换
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
	//获取点击的文本框
	var file = document.getElementById("file");
	//存放图片的父级元素
	var imgContainer = document.getElementsByClassName(obj1)[0];
	//文本框的父级元素
	var input = document.getElementsByClassName(obj2)[0];
	//获取的图片文件
	var fileList = file.files;
	//遍历获取到得图片文件
	for (var i = 0; i < fileList.length; i++) {
		var imgAdd = document.createElement("div");
		var img = document.createElement("img");
		var imgUrl = window.URL.createObjectURL(file.files[i]) ;
		img.setAttribute("src", imgUrl);
		imgAdd.setAttribute("class", "z_addImg");
		imgAdd.appendChild(img);
		imgContainer.appendChild(imgAdd);
	};
	//图片点击监视
	imgRemove();
};

function imgRemove() {
	var imgList = document.getElementsByClassName("z_addImg");
	var mask = document.getElementsByClassName("z_mask")[0];
	var cancel = document.getElementsByClassName("z_cancel")[0];
	var sure = document.getElementsByClassName("z_sure")[0];
	for (var j = 0; j < imgList.length; j++) {
		imgList[j].onclick = function() {
			var t = this;//获取当前元素对象
			mask.style.display = "block";
			cancel.onclick = function() {
				mask.style.display = "none";
			};
			sure.onclick = function() {
				mask.style.display = "none";
				//删除元素
				t.parentNode.removeChild(t);
			};
		}
	};
};
