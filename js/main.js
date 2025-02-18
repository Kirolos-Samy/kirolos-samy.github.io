(function($) {
    "use strict"; 


var windows = $(window);
var sticky = $('.header-sticky')
windows.on('scroll', function() {
	var scroll = windows.scrollTop();
	if (scroll < 250) {
		sticky.removeClass('stick');
	}else{
		sticky.addClass('stick');
	}
});

var multiPageMenu = $('.multi-page-menu');
multiPageMenu.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu.multi-page',
    meanMenuClose: '<i class="ion-android-close"></i>',
    meanMenuOpen: '<i class="ion-navicon"></i>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '30px',
});
var onePageMenu = $('.one-page-menu');
onePageMenu.meanmenu({
    meanScreenWidth: '991',
    meanMenuContainer: '.mobile-menu.one-page',
    meanMenuClose: '<i class="ion-android-close"></i>',
    meanMenuOpen: '<i class="ion-navicon"></i>',
    meanRevealPosition: 'right',
    meanMenuCloseSize: '30px',
    onePage: true,
});


var headerSection = $('.header-section');
var TopOffsetId = headerSection.height() - 1;
onePageMenu.onePageNav({
	currentClass: 'active',
	scrollThreshold: 0.2,
	scrollSpeed: 1000,
	scrollOffset: TopOffsetId,
});


var menuSection = $('.menu-section');
var menuToggle = $('.menu-toggle');
menuToggle.on('click', function(){
    if( headerSection.hasClass('menu-open') ) {
        headerSection.removeClass('menu-open');
        $(this).html('<i class="ion-android-menu"></i>');
        menuSection.removeClass('active');
    }else{
        headerSection.addClass('menu-open');
        $(this).html('<i class="ion-android-close"></i>');
        menuSection.addClass('active');
    }
});


$('.cr-menu ul li a').on('click', function(){
    if( headerSection.hasClass('menu-open') ) {
        headerSection.removeClass('menu-open');
        menuToggle.html('<i class="ion-android-menu"></i>');
        menuSection.removeClass('active');
    }
});

var headerSearch = $('.header-search');
var searchToggle = $('.search-toggle');
searchToggle.on('click', function(){
    if( headerSearch.hasClass('open') ) {
        headerSearch.removeClass('open');
        $(this).html('<i class="ion-android-search"></i>');
    }else{
        headerSearch.addClass('open');
        $(this).html('<i class="ion-android-close"></i>');
    }
});


var parallaxWindow = $('.parallax-window');
parallaxWindow.parallax();


$('[data-scroll], .mobile-menu.one-page .mean-nav ul li a').on('click', function(e) {
	e.preventDefault();
	var link = this;
	$.smoothScroll({
        speed: 1000,
        scrollTarget: link.hash,
        offset: - TopOffsetId,
	});
});
    

$('.hero-slider').slick({
    arrows: true,
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 750,
            settings: {
                arrows: false,
            }
        },
    ]
});
    

$('.cr-testimonial-slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
});
  
$('.co-testimonial-slider-1').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
});
$('.co3-testimonial-slider').slick({
    arrows: false,
    autoplay: true,
    slidesToShow: 2,
    responsive: [
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});
    

$('.co-client-slider-1, .mp-client-slider').slick({
    arrows: false,
    speed: 700,
    slidesToShow: 5,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 479,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});
    


$('.res-testimonial-slider').slick({
    arrows: false,
    speed: 700,
    slidesToShow: 1,
    swipeToSlide: true,
    dots: true,
});

$('.mp-testimonial-slider').slick({
    arrows: false,
    speed: 700,
    slidesToShow: 1,
    swipeToSlide: true,
});

$('.co-portfolio-details-slider').slick({
    arrows: true,
    speed: 700,
    slidesToShow: 1,
    swipeToSlide: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="ion-android-arrow-back"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="ion-android-arrow-forward"></i></button>',
    responsive: [
        {
            breakpoint: 767,
            settings: {
                arrows: false,
            }
        },
    ]
});


var isotopFilter = $('.isotop-filter');
var isotopGrid = $('.isotop-grid');
var isotopGridMasonry = $('.isotop-grid-masonry');
var isotopGridItem = '.isotop-item';

isotopGrid.imagesLoaded( function() {
 
    isotopFilter.on( 'click', 'button', function() {
        isotopFilter.find('button').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        isotopGrid.isotope({ filter: filterValue });
    });
  
    
    isotopGrid.isotope({
        itemSelector: isotopGridItem,
        layoutMode: 'fitRows',
        masonry: {
            columnWidth: 1,
        }
    });
  
    isotopGridMasonry.isotope({
        itemSelector: isotopGridItem,
        layoutMode: 'masonry',
        masonry: {
            columnWidth: 1,
        }
    });
});
    


$.scrollUp({
    scrollText: '<i class="fa fa-angle-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});
    

var videoPopup = $('.video-popup');
videoPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	}
});

var imagePopup = $('.image-popup');
imagePopup.magnificPopup({
	type: 'image',
});

var galleryPopup = $('.gallery-popup');
galleryPopup.magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}	
});

var videGalleryPopup = $('.video-gallery-popup');
videGalleryPopup.magnificPopup({
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	zoom: {
		enabled: true,
	},
	gallery:{
		enabled:true
	}	
});
    


$('.counter').counterUp({
    delay: 20,
    time: 3000
});


$('input[type="time"]').datetimepicker({
    format: 'LT',
    icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-crosshairs',
        clear: 'fa fa-trash-o',
        close: 'fa fa-times'
    },
});
    

$('input[type="date"]').datetimepicker({
    format: 'L',
    icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-crosshairs',
        clear: 'fa fa-trash-o',
        close: 'fa fa-times'
    },
}); 
    

$('.date-time').datetimepicker({
    icons: {
        time: "fa fa-clock-o",
        date: "fa fa-calendar",
        up: 'fa fa-angle-up',
        down: 'fa fa-angle-down',
        previous: 'fa fa-angle-left',
        next: 'fa fa-angle-right',
        today: 'fa fa-crosshairs',
        clear: 'fa fa-trash-o',
        close: 'fa fa-times'
    },
});
    
   

})(jQuery);







