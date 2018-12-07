# CSS
+ ie8不支持border-radius解决
  + [下载](http://css3pie.com/download/)PIE.htc文件
  + css
  ```css
    border-radius:50%;
    behavior:url(pieRootPath/PIE.htc);
    /*由于实现方式的原因，需要添加position: relative，一般也需要z-index*/
    position: relative;
    z-index:10;
  ```
  + PIE.htc position:使得IE(6、7、8)浏览器支持CSS3的border-radius、box-shadow、gradient、RGBA等属性
  + A>B
  ```
  css3特有的选择器，A>B 表示选择A元素的所有子B元素。
  与A B的区别在于，A B选择所有后代元素，而A>B只选择第一代。
  ```
+ css 渲染优先级
  ```html
  <DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv=“X-UA-Compatible" content=“IE=edge" charset="utf-8">
    <meta name=“viewport" content=“width=device-width, initial-scale=1">
  </head>
  <style type="text/css">
    #test{background-color:#f00;}
    .bgc1{background-color:#0f0;}
    .bgc2{background-color:#00f;}
    .sizePosition
    {
      width:100px;
      height:100px;
      margin:100px 0 0 50%;
      display:block;
    }
  </style>
  <body>
    <div id="test" class="bgc1 bgc2 sizePosition" style="background-color:#ff0;"></div>
  </body>
  </html>
  ```
  + 结果
  ---
  ![style.png](pictures/cssPriority/style.png)
   ---
  ![id.png](pictures/cssPriority/id.png)
   ---
  ![class1.png](pictures/cssPriority/class1.png)
   ---
  ![class2.png](pictures/cssPriority/class2.png)
  ---
  ![important.png](pictures/cssPriority/important.png)
  ---
  + 总结
  ```
  1.style下的样式优先级>id选择器下的样式优先级>class选择器下的样式优先级
  2.同一优先级选择后面的样式渲染
  3.如果样式后面有!important则选择该样式
  ```
+ 选择器
  + [css 属性选择器](http://www.w3school.com.cn/css/css_selector_attribute.asp)
  ---
  |选择器|描述|
  |:---:|:---:|
  |[attribute]|用于选取带有指定属性的元素。|
  |[attribute=value]|用于选取带有指定属性和值的元素。|
  |[attribute~=value]|用于选取属性值中包含指定词汇的元素。|
  |[attribute\|=value]|用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。|
  |[attribute^=value]|匹配属性值以指定值开头的每个元素。|
  |[attribute$=value]|匹配属性值以指定值结尾的每个元素。|
  |[attribute*=value]|匹配属性值中包含指定值的每个元素。|
  + 子选择器&兄弟选择器
  ```html
  <style type="text/css">
		.parent{background-color:#f00;}
		.parent>div{background-color:#0f0;}
		.sizePosition
		{
			width:300px;
			height:300px;
			margin:100px 10px 0 30px;
			padding:10px;
			float:left;
			display:block;
		}
		.sizePosition>div /* 子选择器 */
		{
			width:100px;
			height:100px;
			margin:10px;
			text-align:center;
			float:left;
			display:block;
		}
		#fistChild+div{background-color:#ff0;} /* 相邻兄弟选择器 */
		#secondChild~div{background-color:#00f;} /* 所有兄弟选择器 */
	</style>
	<body>
		<div class="parent sizePosition">
			<div id="fistChild"></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		<div class="parent sizePosition">
			<div id="fistChild"></div>
			<div id="secondChild"></div>
			<div></div>
			<div></div>
		</div>
	</body>
  ```
  + 结果
  ---
  ![childSibling.png](pictures/cssPriority/childSibling.png)
