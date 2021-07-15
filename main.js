window.onscroll = function() {
    myFunction();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
    if(window.pageYOffset > sticky){
        header.classList.add("sticky");
    } else{
        header.classList.remove("sticky");
    }
}

$('body').scrollspy({
    target: '#myHeader'
});


$(document).ready(function() {
    $('.fa-search').on("click", function() {
        $('.header-search .header-input').css("display","inline-block");
        $(".close-icon").css("display","inline-block");
        $(".search-icon").css("display","none");
    });
    $('.close-icon').on("click", function() {
        $('.header-search .header-input').css("display","none");
        $(".close-icon").css("display","none");
        $(".search-icon").css("display","inline-block");
    });
});


// ***********************
// for sliders 
$('.veg-slider').bxSlider({
    auto: true,
     controls: true,
     nextText: '<i class="fas fa-arrow-right"></i>',
     prevText: '<i class="fas fa-arrow-left"></i>',
     pause: 5000,
     speed: 500,
     slideMargin: 30,
     pager: true,
     pagerCustom: ''
});
$(".non-veg-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: ''
});
$(".mushroom-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: ''
});
$(".cheese-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: ''
});
$(".paneer-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: ''
});



// **********************
$(".testimonials-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '',
    prevText : '',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: '.testimonials-slider-pager-one, .testimonials-slider-pager-two, .testimonials-slider-pager-three'
});

// *******************
$(".chef-slider").bxSlider({
    auto:true,
    controls: true,
    nextText : '<i class="fas fa-arrow-right"></i>',
    prevText : '<i class="fas fa-arrow-left"></i>',
    pause: 5000,
    speed: 500,
    slideMargin : 30,
    pager : true,
    pagerCustom: '.chef-slider'
});