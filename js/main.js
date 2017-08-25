/**
 * Created by Administrator on 2017/8/24.
 */
$(function(){
    $('.show').click(function(){
        $('.recharge-content').show(500);
    })
    $('.recharge').click(function(){
        $('.box').css({'display':'block'});
        $('.alert-content').css({'display':'block'});
    })
    $('.close').click(function(){
        $('.box').css({'display':'none'});
        $('.alert-content').css({'display':'none'});
    })
    $('.choose a').click(function(){
        $(this).addClass('active').siblings('a').removeClass('active');
        $('.money').val($(this).text());
        $('.pay').text(parseInt($(this).text()));
    })
    if(parseInt($('.surplus').text())>=50){
        $('.surplus').addClass('act');
    }
})