let scrollPosition = 0;

        function scrollCarousel(direction) {
            const carousel = document.querySelector('.item_cards');
            const cardWidth = document.querySelector('.cards').offsetWidth;
            scrollPosition += direction * cardWidth;
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;

            if (scrollPosition < 0) {
                scrollPosition = 0;
            } else if (scrollPosition > maxScroll) {
                scrollPosition = maxScroll;
            }

            carousel.style.transform = `translateX(-${scrollPosition}px)`;

            // Show or hide buttons based on the scroll position
            document.querySelector('.prev').style.display = scrollPosition > 0 ? 'block' : 'none';
            document.querySelector('.next').style.display = scrollPosition < maxScroll ? 'block' : 'none';
        }

        // Initialize buttons visibility
        document.querySelector('.prev').style.display = 'none';
        document.querySelector('.next').style.display = document.querySelector('.item_cards').scrollWidth > document.querySelector('.b_2').clientWidth ? 'block' : 'none';