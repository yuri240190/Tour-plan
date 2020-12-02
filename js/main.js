var hotelSlider = new Swiper('.hotel-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  effect:'coverflow',
 keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})
var reviewsSlider = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  
 keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
})
var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    myMap = new ymaps.Map('map', {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [7.839145110780258, 98.29909090764404], //Пхукет
        zoom: 15

    }, {
        searchControlProvider: 'yandex#search'
    });

    document.getElementById('destroyButton').onclick = function () {
        // Для уничтожения используется метод destroy.
        myMap.destroy();
    };

}
var menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click' , function (){
  console.log('клик по кнопки меню')
  document
  .querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom-visible");
 



 document.getElementsByTagName("body")[0].classList.toggle("fixed");
});
// document.querySelector("body")[0].classList.toggle('body-fixed');
//  var menuButton = document.querySelector('.menu-button');
// menuButton.addEventListener('click' , function (){
//   console.log('клик по кнопки меню')
//   document
 

  
// });
//  var menuButton = document.querySelector('.menu-button');
// menuButton.addEventListener('on click' , function (){
//   console.log('клик  меню')
//   document
  

//  document.getElementsByTagName("body")[0].style.width="100%";
  
// });


// //  document.getElementsByTagName("body")[0].style.position="fixed";
// //  document.getElementsByTagName("body")[0].style.width="100%";