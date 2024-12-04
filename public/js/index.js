

window.addEventListener('load', () => {


    // Home Sliders Swiper

    const swiper = new Swiper(".mySwiper", {
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // }
    });

    // Special Products Sliders Swiper

    const swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 2,
        spaceBetween: 10,
        // centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 14,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 14,
            },
        },
    });

    // Newest Products Sliders Swiper

    const swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 2,
        spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 10,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 14,
            },
            1280: {
                slidesPerView: 4,
                spaceBetween: 14,
            },
        },
    });

})

document.addEventListener('scroll', e => {
    if(window.scrollY > 0) {
        document.querySelector('#bottom-header').classList.add('bottom-header--scroll')
    }else{
        document.querySelector('#bottom-header').classList.remove('bottom-header--scroll')
    }
})