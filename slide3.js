let scrollPosition2 = 0;

function scrollCarousel2(direction) {
    const carousel = document.querySelector('.b5_item_cards');
    const cardWidth = document.querySelector('.b5_cards').offsetWidth;
    scrollPosition2 += direction * cardWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;

    if (scrollPosition2 < 0) {
        scrollPosition2 = 0;
    } else if (scrollPosition2 > maxScroll) {
        scrollPosition2 = maxScroll;
    }

    carousel.style.transform = `translateX(-${scrollPosition2}px)`;

    // Show or hide buttons based on the scroll position
    document.querySelector('.prev2').style.display = scrollPosition2 > 0 ? 'block' : 'none';
    document.querySelector('.next2').style.display = scrollPosition2 < maxScroll ? 'block' : 'none';
}

// Initialize buttons visibility
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.prev2').style.display = 'none';
    document.querySelector('.next2').style.display = document.querySelector('.b5_item_cards').scrollWidth > document.querySelector('.b5_1').clientWidth ? 'block' : 'none';
});
