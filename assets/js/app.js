$(document).ready(function(){
    $(".blog-slider").slick({
        //variableWidth: true,
        //centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        draggable: false,
        //prevArrow:`<button type='button' class='slick-prev pull-left slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
        //nextArrow: `<button type='button' class='slick-next pull-right slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
        dots: true,
        arrows: false,
        infinite: true,
    });
  });