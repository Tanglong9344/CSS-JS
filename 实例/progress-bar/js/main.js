/*
  设百分比为n%,如果rate>=50,左圆不动，右圆旋转360-3.6*rate
  如果rate<50,右圆背景色设置为背景圆颜色，并保持不动，左圆旋转180-3.6*rate
*/
$(document).ready(function(){
  initData("cRateVal","total","finished","cl","cr");//左圆
  initData("cRateValp","totalp","finishedp","clp","crp");//右圆
});

/*初始化数据*/
function initData(rateVal,total,finished,left,right){
  var total = parseInt($("#"+total+"").text());
  var finished = parseInt($("#"+finished+"").text());
  var rate = parseInt((finished*100)/total);
  $("#"+rateVal+"").text(rate);
  if(rate >= 50){
    $("#"+right+"").css('transform','rotate('+(360-3.6*rate)+'deg)');
  }else{
    $("#"+right+"").css('background-color','lightgreen');
    $("#"+left+"").css('transform','rotate('+(180-3.6*rate)+'deg)');
  }
}