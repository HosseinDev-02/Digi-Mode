window.addEventListener("load", () => {
    const laptopCover = document.getElementById("laptop-cover-btn");
    const installWindows = document.getElementById("laptop-windows-btn");
    const productDescBtn = document.getElementById("product-desc-btn");
    const productDesc = document.getElementById("product-desc");
    const productDescCover = document.querySelector(".product-desc-cover");
    const productReviewBtn = document.querySelector('#product-review-btn');
    const productReview = document.querySelector('.product-review');
    const productCommentsBtn = document.querySelector('#product-comments-btn')
    const productComment = document.querySelector('.product-comments')
    const productCommentForm = document.getElementById("product-comment-form")

    let showDescBtnContent = `<span>
    مشاهده بیشتر
</span>
<span>
    <svg class="w-5 h-5">
        <use href="#chevron-down"></use>
    </svg>
</span>`;

    let closeDescBtnContent = `
    <span>
                                    مشاهده کمتر
                                </span>
                                <span>
                                    <svg class="w-5 h-5">
                                        <use href="#chevron-up"></use>
                                    </svg>
                                </span>`;

    productDescBtn.addEventListener("click", () => {
        productDesc.classList.toggle("show-product-desc");
        productDescBtn.classList.toggle("!text-gray-700");
        if(productDescBtn.className.includes('!text-gray-700')) {
            productDescBtn.innerHTML = closeDescBtnContent
        }else{
            productDescBtn.innerHTML = showDescBtnContent
            productDesc.scrollIntoView({ behavior: "smooth" })
        }
    });

    productCommentsBtn.addEventListener('click', () => {
        productComment.classList.toggle('product-comments--show')
        productCommentsBtn.classList.toggle('!text-gray-700')
        if(!productComment.className.includes('product-comments--show')) {
            productComment.scrollIntoView({ behavior: "smooth" })
        }
    })

    productReviewBtn.addEventListener('click', () => {
        productReview.classList.toggle('product-review--show')
        productReviewBtn.classList.toggle('!text-gray-700')
        if(!productReview.className.includes('product-review--show')){
            productReview.scrollIntoView({ behavior: "smooth" })
        }
    })

    const setLaptopWithCover = () => {
        laptopCover.classList.toggle("laptop-cover--active");
    };
    const setLaptopInstallWindows = () => {
        installWindows.classList.toggle("install-windows--active");
    };

    laptopCover.addEventListener("click", setLaptopWithCover);
    installWindows.addEventListener("click", setLaptopInstallWindows);

    const swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    const swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
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

    productCommentForm.addEventListener('submit', (e) => {
        e.preventDefault()
    })
});
