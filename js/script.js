$('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1
})

sliderSecondBlock()
function sliderSecondBlock() {
    $('.reviews .reviewsBlock .info-block .item.slick-active').eq(1).addClass('active');
}