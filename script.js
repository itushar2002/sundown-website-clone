const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
// var a = document.querySelector("#elem1");
// var image = a.getAttribute("data-image");
// console.log(image)

var elemC = document.querySelector("#elem-container")
var image = document.querySelector("#fixed-img")
elemC.addEventListener("mouseenter", function () {
   image.style.display = "block"
})
var elemC = document.querySelector("#elem-container")
var image = document.querySelector("#fixed-img")
elemC.addEventListener("mouseleave", function () {
   image.style.display = "none"
})

var elems = document.querySelectorAll(".elem")
elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var card = e.getAttribute("data-image")
        image.style.backgroundImage = `url(${card})`
     })
})


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
    });
}


function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}



swiperAnimation();
loaderAnimation();