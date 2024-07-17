let scrollPosition6 = 0;

function scrollCarousel7(direction) {
    const carousel = document.querySelector('.b13_item_cards');
    const cardWidth = document.querySelector('.b13_cards').offsetWidth;
    scrollPosition6 += direction * cardWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (scrollPosition6 < 0) {
        scrollPosition6 = 0;
    } else if (scrollPosition6 > maxScroll) {
        scrollPosition6 = maxScroll;
    }

    carousel.style.transform = `translateX(-${scrollPosition6}px)`;

    // Show or hide buttons based on the scroll position
    document.querySelector('.prev6').style.display = scrollPosition6 > 0 ? 'block' : 'none';
    document.querySelector('.next6').style.display = scrollPosition6 < maxScroll ? 'block' : 'none';
}
// Initialize buttons visibility
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev6').style.display = 'none';
    document.querySelector('.next6').style.display = document.querySelector('.b13_item_cards').scrollWidth > document.querySelector('.b13_1').clientWidth ? 'block' : 'none';
});
