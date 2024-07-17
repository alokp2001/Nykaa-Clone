let scrollPosition4 = 0;

function scrollCarousel4(direction) {
    const carousel = document.querySelector('.b8_item_cards');
    const cardWidth = document.querySelector('.b8_cards').offsetWidth;
    scrollPosition4 += direction * cardWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (scrollPosition4 < 0) {
        scrollPosition4 = 0;
    } else if (scrollPosition4 > maxScroll) {
        scrollPosition4 = maxScroll;
    }

    carousel.style.transform = `translateX(-${scrollPosition4}px)`;

    // Show or hide buttons based on the scroll position
    document.querySelector('.prev4').style.display = scrollPosition4 > 0 ? 'block' : 'none';
    document.querySelector('.next4').style.display = scrollPosition4 < maxScroll ? 'block' : 'none';
}
// Initialize buttons visibility
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev4').style.display = 'none';
    document.querySelector('.next4').style.display = document.querySelector('.b8_item_cards').scrollWidth > document.querySelector('.b8_1').clientWidth ? 'block' : 'none';
});
