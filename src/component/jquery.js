import $ from  'jquery';

$(function(){
    console.log$('.float-wrap :nth-child(1) .float-text').offset().top;
    let secItem=($('.float-wrap :nth-child(2) .float-text').offset().top);
    let thirdItem=($('.float-wrap :nth-child(3) .float-text').offset().top);
    let fourItem=($('.float-wrap :nth-child(4) .float-text').offset().top);
    $(window).on('scroll',()=>{
        if($(this).scrollTop()>firstItem){
            alert(5);
        }
    })
})