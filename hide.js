const lastElement = document.getElementById('last');
                let lastScrollTop = 0;
                const threshold = 200; 
        
                window.addEventListener('scroll', function() {
                    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    if (scrollTop - lastScrollTop > threshold) {
                        
                        lastElement.style.display = 'none';
                        lastScrollTop = scrollTop; 
                    } else if (lastScrollTop - scrollTop > threshold) {
                        // Scrolling up more than the threshold
                        lastElement.style.display = 'block';
                        lastScrollTop = scrollTop;
                    }
                }, false);