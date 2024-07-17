let scrollPosition5 = 0;

function scrollCarousel6(direction) {
    const carousel = document.querySelector('.b11_item_cards');
    const cardWidth = document.querySelector('.b11_cards').offsetWidth;
    scrollPosition5 += direction * cardWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (scrollPosition5 < 0) {
        scrollPosition5 = 0;
    } else if (scrollPosition5 > maxScroll) {
        scrollPosition5 = maxScroll;
    }

    carousel.style.transform = `translateX(-${scrollPosition5}px)`;

    // Show or hide buttons based on the scroll position
    document.querySelector('.prev5').style.display = scrollPosition5 > 0 ? 'block' : 'none';
    document.querySelector('.next5').style.display = scrollPosition5 < maxScroll ? 'block' : 'none';
}
// Initialize buttons visibility
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev5').style.display = 'none';
    document.querySelector('.next5').style.display = document.querySelector('.b11_item_cards').scrollWidth > document.querySelector('.b11_1').clientWidth ? 'block' : 'none';
});
