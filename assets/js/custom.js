     (function ($) {
        $(".header-menu-bar").on("click", function () {
          $("body").addClass("body-mobile-menu");
        });
        $(".header-mobile-close").on("click", function () {
          $("body").removeClass("body-mobile-menu");
        });
        $(".breadcrumb-nav-mobile h2").on("click", function () {
          $(".breadcrumb-nav-mobile ul").slideToggle();
        });
      })(jQuery);


      $(document).ready(function(){
        $('.carousel').slick({
        slidesToShow: 2,
        dots:true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
        prevArrow: '<span class="prev-arrow"><img src="./assets/img/left.png" alt=""></span>',
        nextArrow: '<span class="next-arrow"><img src="./assets/img/right.png" alt=""></span>',
        });
      });

      $(document).ready(function(){
        $('.inspiration-carousel').slick({
        slidesToShow: 1,
        dots:true,
        centerMode: true,
        centerPadding: "60px",
        prevArrow: '<span class="prev-arrow2"><img src="./assets/img/left.png" alt=""></span>',
        nextArrow: '<span class="next-arrow2"><img src="./assets/img/white-right.png" alt=""></span>',
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1300,
            settings: {
              slidesToShow: 2,
            },
          },
        ],
        });
      });
      
$('.tips-carousel').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots:true,
  autoplay: false,
  centerMode: true,
  centerPadding: "0px",
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
  prevArrow: '<span class="prev-arrow3"><img src="./assets/img/left-white.png" alt=""></span>',
  nextArrow: '<span class="next-arrow3"><img src="./assets/img/white-right.png" alt=""></span>',
});
	
// $('.tips-carousel').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//  autoplay: true,
//   centerMode: true,
//   slidesToShow: 3,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//     {
//       breakpoint: 991,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//   ],
//   prevArrow: '<span class="prev-arrow3"><img src="./assets/img/left-white.png" alt=""></span>',
//   nextArrow: '<span class="next-arrow3"><img src="./assets/img/white-right.png" alt=""></span>',
// });