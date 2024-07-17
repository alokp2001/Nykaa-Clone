let scrollPosition1 = 0;

function scrollCarousel1(direction) {
    const carousel = document.querySelector('.b4_item_cards');
    const cardWidth = document.querySelector('.b4_cards').offsetWidth;
    scrollPosition1 += direction * cardWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (scrollPosition1 < 0) {
        scrollPosition1 = 0;
    } else if (scrollPosition1 > maxScroll) {
        scrollPosition1 = maxScroll;
    }

    carousel.style.transform = `translateX(-${scrollPosition1}px)`;

    // Show or hide buttons based on the scroll position
    document.querySelector('.prev1').style.display = scrollPosition1 > 0 ? 'block' : 'none';
    document.querySelector('.next1').style.display = scrollPosition1 < maxScroll ? 'block' : 'none';
}

// Initialize buttons visibility
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev1').style.display = 'none';
    document.querySelector('.next1').style.display = document.querySelector('.b4_item_cards').scrollWidth > document.querySelector('.b4_1').clientWidth ? 'block' : 'none';
});
