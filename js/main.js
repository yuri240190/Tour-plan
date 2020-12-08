$(document).ready(function () {
  var hotelSlider = new Swiper('.hotel-slider', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.hotel-slider__button--next',
      prevEl: '.hotel-slider__button--prev',
    },
    effect: 'coverflow',
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

  function init() {
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
  menuButton.addEventListener('click', function () {
    console.log('клик по кнопки меню')
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom-visible");
    document.getElementsByTagName("body")[0].classList.toggle("fixed");


  });

    var bookingButton = document.querySelector('.booking__button');
   bookingButton.addEventListener('click', function () {
   document.getElementsByTagName("body")[0].classList.toggle("body-fixed");
    var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible")
    modalDialog.addClass("modal__dialog--visible")

  }
  function closeModal() {
    var body = $("body");
    body.removeClass("body-fixed")

  };


 });
 
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible")
    modalDialog.addClass("modal__dialog--visible")

  }
  function closeModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible")
    modalDialog.removeClass("modal__dialog--visible")

  };
  // обработка форм 
  $('.form').each(function(){
    $(this).validate({
     errorClass: "invalid",
     messages: {
    name: {
      required: "Please specify your name",
      minlength: "The name must not be shorter than 2 letters"

    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
    phone:{
      required: "Phone number required",
   

    },
     email1: {
     required :"email  required" , }, 
  },
  

  });
  })
    $('.subscride__form').each(function(){
    $(this).validate({
    
  
     email: {
     required :"email  required" , }, 
  
  
})
  
  });

  $(document).ready(function(){
  $("#phone").mask("+7(999)999-99-99");
})
  $(document).ready(function(){
  $("#phone1").mask("+7(999)999-99-99");
})
AOS.init();

});

