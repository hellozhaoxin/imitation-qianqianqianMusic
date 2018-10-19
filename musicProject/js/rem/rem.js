/**
 * Created by john on 2018/9/7.
 */
 function fun(){
     var clictWidth = document.documentElement.clientWidth;
     //console.log('设备宽度是'+clictWidth);
     var bili = clictWidth/375;
     var nowFontsize = 100*bili;
     document.documentElement.style.fontSize = nowFontsize+'px';
     //console.log('fonsize值是'+nowFontsize)
 }
 fun();
 window.onresize=function(){
     fun();
 };