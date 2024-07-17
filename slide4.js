let scrollPosition3 = 0;

function scrollCarousel3(direction) {
    const carousel = document.querySelector('.b6_item_cards');
    const cardWidth = document.querySelector('.b6_cards').offsetWidth;
    scrollPosition3 += direction * cardWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (scrollPosition3 < 0) {
        scrollPosition3 = 0;
    } else if (scrollPosition3 > maxScroll) {
        scrollPosition3 = maxScroll;
    }

    carousel.style.transform = `translateX(-${scrollPosition3}px)`;

    // Show or hide buttons based on the scroll position
    document.querySelector('.prev3').style.display = scrollPosition3 > 0 ? 'block' : 'none';
    document.querySelector('.next3').style.display = scrollPosition3 < maxScroll ? 'block' : 'none';
}
// Initialize buttons visibility
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev3').style.display = 'none';
    document.querySelector('.next3').style.display = document.querySelector('.b6_item_cards').scrollWidth > document.querySelector('.b6_1').clientWidth ? 'block' : 'none';
});
