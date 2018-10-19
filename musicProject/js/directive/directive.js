/**
 * Created by john on 2018/9/7.
 */
$('.nav').on('click','li',function(){
    $(this).addClass('active').siblings().removeClass('active')
})