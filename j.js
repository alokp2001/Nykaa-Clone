document.addEventListener('DOMContentLoaded', function () {
    const cat1Elems = document.querySelectorAll('.b_cat1');
    
    // const cat1 = this.document.querySelector('b_cat1');
    const brandImgs1 = document.querySelector('.brand_imgs1');
    const brandImgs2 = document.querySelector('.brand_imgs2');
    const brandImgs3 = document.querySelector('.brand_imgs3');
    const brandbutton1 = document.querySelector('.b_p'); 
    const brandbutton2 = document.querySelector('.b_l');
    const brandbutton3 = document.querySelector('.b_o');
    const brandbutton4 = document.querySelector('.b_n');

    

    cat1Elems.forEach((elem, index) => {
        elem.addEventListener('mouseover', function () {
            
            if (index === 0) {
                brandbutton1.style.backgroundColor = '#E80071'; 
                brandbutton1.style.color = 'white';
                brandbutton2.style.backgroundColor = 'gray';
                brandbutton2.style.color = 'black';
                brandbutton3.style.backgroundColor = 'gray';
                brandbutton3.style.color = 'black';
                brandbutton4.style.backgroundColor = 'gray';
                brandbutton4.style.color = 'black';
                







                brandImgs1.style.display = 'flex';
                brandImgs2.style.display = 'none';
                brandImgs3.style.display = 'none';
            } else if (index === 1) {
                brandbutton1.style.backgroundColor = 'gray';
                brandbutton1.style.color = 'black';
                brandbutton2.style.backgroundColor = '#E80071';
                brandbutton2.style.color = 'white';
                brandbutton3.style.backgroundColor = 'gray';
                brandbutton3.style.color = 'black';
                brandbutton4.style.backgroundColor = 'gray';
                brandbutton4.style.color = 'black';
                




                brandImgs1.style.display = 'flex';
                brandImgs2.style.display = 'none';
                brandImgs3.style.display = 'none';
            } else if (index === 2) {
                brandbutton1.style.backgroundColor = 'gray';
                brandbutton1.style.color = 'black';
                brandbutton2.style.backgroundColor = 'gray';
                brandbutton2.style.color = 'black';
                brandbutton3.style.backgroundColor = '#E80071';
                brandbutton3.style.color = 'white';
                brandbutton4.style.backgroundColor = 'gray';
                brandbutton4.style.color = 'black';





                brandImgs1.style.display = 'flex';
                brandImgs2.style.display = 'none';
                brandImgs3.style.display = 'none';
            } else if (index === 3) {
                brandbutton1.style.backgroundColor = 'gray';
                brandbutton1.style.color = 'black';
                brandbutton2.style.backgroundColor = 'gray';
                brandbutton2.style.color = 'black';
                brandbutton3.style.backgroundColor = 'gray';
                brandbutton3.style.color = 'black';
                brandbutton4.style.backgroundColor = '#E80071';
                brandbutton4.style.color = 'white';







                brandImgs1.style.display = 'flex';
                brandImgs2.style.display = 'none';
                brandImgs3.style.display = 'none';
            }
        });
    });
});

