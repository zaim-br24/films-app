let owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
});