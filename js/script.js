// navbar auto dropdown hover start

// document.addEventListener("DOMContentLoaded", function(){
//     // make it as accordion for smaller screens
//     if (window.innerWidth > 768) {
    
//         document.querySelectorAll('.navbar .nav-item').forEach(function(everyitem){
    
//             everyitem.addEventListener('mouseover', function(e){
    
//                 let el_link = this.querySelector('a[data-bs-toggle]');
    
//                 if(el_link != null){
//                     let nextEl = el_link.nextElementSibling;
//                     el_link.classList.add('show');
//                     nextEl.classList.add('show');
//                 }
    
//             });
//             everyitem.addEventListener('mouseleave', function(e){
//                 let el_link = this.querySelector('a[data-bs-toggle]');
    
//                 if(el_link != null){
//                     let nextEl = el_link.nextElementSibling;
//                     el_link.classList.remove('show');
//                     nextEl.classList.remove('show');
//                 }
    
    
//             })
//         });
    
//     }
//     // end if innerWidth
//     }); 

// navbar auto dropdown hover end

// Slick Slider start

$('.portfolio-Slider').slick({
    infinite: true,
    // dots: true,
    // arrows: false,
    // lazyLoad: 'ondemand',
    autoplay: true,
    // centerMode: true,
    // centerPadding: '40px',
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
          breakpoint: 1273,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
     

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });

// Slick Slider end

// tyyewriter start

$(document).ready(function () {
  $(".autotype").typeWrite({
    speed: 300,
    // repeat: true,
    cursor: false,
    color: "var(--brand-color)",
    interval: 1000,
  });
});

// tyyewriter end
