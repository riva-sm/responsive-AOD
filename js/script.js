$(document).ready(function () {
  $(".icon-menu").click(function (event) {
    $(this).toggleClass("active");
    $(".menu__body").toggleClass("active");
    $("body").toggleClass("lock");
  });

  function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' + $(this).find("img").attr("src") + '")'
        );
      }
    });
  }
  ibg();

  if ($(".slider__body").length > 0) {
    $(".slider__body").slick({
      autoplay: true,
      infinite: true,
      dots: true,
      arrows: false,
      accessibility: false,
      slidesToShow: 1,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
    });
  }
});
