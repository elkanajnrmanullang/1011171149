document.addEventListener('DOMContentLoaded', function () {
    let nextBtn = document.querySelector('.next');
    let prevBtn = document.querySelector('.prev');
    let slider = document.querySelector('.slider');
    let sliderList = slider.querySelector('.list');
    let thumbnail = document.querySelector('.thumbnail');

    // Fungsi untuk memindahkan slider ke arah yang ditentukan
    function moveSlider(direction){
        let sliderItems = sliderList.querySelectorAll('.item');
        let thumbnailItems = thumbnail.querySelectorAll('.item');

        if(direction === 'next'){
            sliderList.appendChild(sliderItems[0]);
            thumbnail.appendChild(thumbnailItems[0]);
            slider.classList.add('next');
        } else {
            sliderList.prepend(sliderItems[sliderItems.length - 1]);
            thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
            slider.classList.add('prev');
        }

        // Event listener untuk menghapus class setelah animasi selesai
        slider.addEventListener('animationend', function(){
            if (direction === 'next'){
                slider.classList.remove('next');
            } else {
                slider.classList.remove('prev');
            }
        }, {once:true});
    }

    // Fungsi untuk menangani klik pada tombol next
    nextBtn.onclick = function(){
        moveSlider('next');
    }

    // Fungsi untuk menangani klik pada tombol prev
    prevBtn.onclick = function(){
        moveSlider('prev');
    }
});
