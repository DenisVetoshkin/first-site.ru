$(function(){

let header = $("#header"), intro = $("#intro");
let scrollPos = $(window).scrollTop();

$(window).on("scroll load resize", function() {
  let introH = intro.innerHeight();
  scrollPos = $(this).scrollTop();
  if(scrollPos > introH) {
    header.addClass("fixed");
  }
  else {
    header.removeClass("fixed");
  }
  });

$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
  let elementId = $(this).data("scroll");
  let elementOffset = $(elementId).offset().top;
  nav.removeClass("show");
  $("html, body").animate({
    scrollTop: elementOffset - 65
  }, 700);
});

let nav = $("#nav");
let navToggle = $("#navToggle");
navToggle.on("click", function(event) {
  event.preventDefault();
  nav.toggleClass("show");
});

$("#testSlider").slick({
 infinite: true,
 slidesToShow: 4,
 slidesToScroll: 4,
 fade: true,
 arrows: false
});

});
