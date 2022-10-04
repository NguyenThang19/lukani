$(document).ready(function () {

    // Default when document loaded
    setTimeout(() => {
        $('.modal-landing').fadeIn(500);
    }, 1000);

    // Slider
    $('.list-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        autplaySpeed: 2000,
        fade:true,
        cssEase: 'linear',
        arrows: true,
        dots: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left icon-arrow-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right icon-arrow-right' aria-hidden='true'></i></button>"
    });

    $('.content-review').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        autplaySpeed: 2000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left icon-arrow-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right icon-arrow-right' aria-hidden='true'></i></button>"
    });

    $('.list-post').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autplaySpeed: 2000,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left icon-arrow-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right icon-arrow-right' aria-hidden='true'></i></button>"
    });

    // Script Search Nav
    $('.search-box .select-categories').click(() => {
        $('.search-box .select-categories i').toggleClass('rotate180Deg');
        $('.search-box .list-categories').slideToggle();
    });

    // Function change content Element <span> Categories.
    function setValueCategoryForSearch() {
        var array = [];
        $('ul.list-categories > li').each(function() {
            array.push($(this).text());
        });
        $('ul.list-categories > li').click(function() {
            numberValue = parseInt($(this).attr("value"));
            $('.select-categories > span > span').html(array[numberValue]);
            $(this).addClass('f-bold');
            $(this).siblings().removeClass('f-bold');
        });
    }
    // Script Modal Cart - Show - Hidden Modal Cart
    // Event btn-cart
    $('.btn-cart').click(() => {
        $(".modal-cart").css("visibility", "visible");
        $('.modal-cart .cart-content').css('animation', 'show-cart 0.6s ease forwards');
    });

    // Event btn-close of Modal Cart
    $('.modal-cart .cart-content .title-cart .icon-close').click(() => {
        $('.modal-cart .cart-content').css('animation', 'hidden-cart 0.6s ease forwards');
        setTimeout(() => {
            $('.modal-cart').css('visibility', 'hidden');
        }, 600);
    });

    $('.modal-cart').click(() => {
        $('.modal-cart .cart-content').css('animation', 'hidden-cart 0.6s ease forwards');
        setTimeout(() => {
            $('.modal-cart').css('visibility', 'hidden');
        }, 700);
    });

    //Function Count Down Time In Deals To Day Section

    function countDownTime() {
        var countDate = setInterval(function () {
            var countDownDate = new Date("Dec 19, 2022 00:00:00").getTime();
            var now = new Date().getTime();
            var distance = countDownDate - now;
            var dayCount = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hourCount = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minuteCount = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var secondCount = Math.floor((distance % (1000 * 60)) / 1000);

            $('.detail-product .items-today .action-link .timting-coupon .count-days').html(`${dayCount}`);
            $('.detail-product .items-today .action-link .timting-coupon .count-hours').html(`${hourCount}`);
            $('.detail-product .items-today .action-link .timting-coupon .count-minutes').html(`${minuteCount}`);
            $('.detail-product .items-today .action-link .timting-coupon .count-second').html(`${secondCount}`);

            if (distance < 0) {
                clearInterval(countDate);
                $('.detail-product .items-today .action-link .timting-coupon .count-days').html("Hết hạn");
                $('.detail-product .items-today .action-link .timting-coupon .count-hours').html("Hết hạn");
                $('.detail-product .items-today .action-link .timting-coupon .count-minutes').html("Hết hạn");
                $('.detail-product .items-today .action-link .timting-coupon .count-second').html("Hết hạn");
            };
        }, 1000);
    };
    countDownTime();

    //Event modal landing
    $('.modal-landing .content-landing .close-landing').click((e)=>{
        $('.modal-landing').fadeOut(300);
    })

    // Event Element Catrgories
    $('.name-categories').on('click',(e) => {
        e.stopPropagation();
        $('.header-bottom .menu-toggle-categories').slideToggle();
    });

    $(document).click(()=>{
        $('.header-bottom .menu-toggle-categories').slideUp();
    });
    // Fixed Navigation
    $( window ).scroll(function(){
        var distanceTop = $(window).scrollTop();
        if(distanceTop < 200){
            $('.header .header-bottom').removeClass('sticky-header');
        }else{
            $('.header .header-bottom').addClass('sticky-header');
        }
    } );

    // Bubbling Events
    $('.modal-cart .cart-content').click((e) => {
        e.stopPropagation();
    });

    $('.content-landing').click((e) => {
        e.stopPropagation();
    });

    $('.menu-toggle-categories').click((e) => {
        e.stopPropagation();
    });

    $('.menu-toggle-categories .items-menu').click((e) => {
        e.stopPropagation();
    })
    
    // Call Function here
    setValueCategoryForSearch();
});
