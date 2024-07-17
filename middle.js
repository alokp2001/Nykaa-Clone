document.addEventListener('DOMContentLoaded', function () {
    // const listItems = document.querySelectorAll('.l2 ul li');
    const m_brands = document.querySelector('.m_b');
    const brands_b = document.querySelector('.b2');

    const luke = document.querySelector('.luke');
    const m_luke = document.querySelector('.m_l');
    const luke_box = document.querySelector('.luke2_a');
    const brands = document.querySelector('.brands');


    m_brands.addEventListener('mouseover', function () {
        // brands_b.style.display = 'flex';
        brands.style.display = 'block';

        // luke.style.display = 'none';
        // luke_box.style.display = 'none';
        

    });

    m_brands.addEventListener('mouseout', function () {
        brands_b.style.display = 'none';
        // brands.style.display = 'none';
    });



    m_luke.addEventListener('mouseover', function () {
        // luke.style.display = 'block';
        // luke_box.style.display = 'flex';
        brands.style.display = 'block';
        // brands.style.display = 'none';


        brands_b.style.display = 'none';
        

    });
    m_luke.addEventListener('mouseout', function () {
        // brands.style.display = 'none';
        // luke.style.display = 'none';
        // luke_box.style.display = 'none';
    });













    brands.addEventListener('mouseover', function () {
        // brands.style.display = 'block';
         // luke.style.display = 'block';
        // brands_b.style.display = 'flex';
        // luke_box.style.display = 'flex';
    });
    brands.addEventListener('mouseout', function () {
        brands.style.display = 'none';
        brands_b.style.display = 'none';
        // luke.style.display = 'none';
        // luke_box.style.display = 'none';
    });





    listItems.forEach((li, index) => {
        li.addEventListener('mouseover', function () {
            // if (index === 3) {
            //     brands.style.display = 'block';
            // }

            // else if (index === 1) {
            //     brands.style.display = 'block';
            //     brands.style.backgroundColor = 'pink';
            // }

            // else if (index === 2) {
            //     brands.style.display = 'block';
            //     brands.style.backgroundColor = 'red';
            // }

            // else if (index === 3) {
            //     brands.style.display = 'block';
            //     brands.style.backgroundColor = 'green';
            // }

            // else if (index === 4) {
            //     brands.style.display = 'block';
            //     brands.style.backgroundColor = 'black';
            // }
        });

        m_luke.addEventListener('mouseover', function () {
    
        });

        brands.addEventListener('mouseout', function () {
        
        });

        li.addEventListener('mouseout', function () {
            // brands.style.display = 'none';
        });
    });
});
