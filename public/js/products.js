window.addEventListener("load", () => {
    const rangeInputs = document.querySelectorAll(".price-range-input");
    const progress = document.querySelector(".progress");
    const maxPriceValue = document.getElementById("max-price");
    const minPriceValue = document.getElementById("min-price");
    const productsFilteringMenu = document.getElementById('products-filtering-menu')
    const productsFilteringMenuBtn = document.getElementById('products-filtering-menu-btn')


    const priceGap = 20000000;

    rangeInputs.forEach((input) => {
        input.addEventListener("input", (event) => {
            let minValue = parseInt(rangeInputs[0].value);
            let maxValue = parseInt(rangeInputs[1].value);

            console.log("minValue :", minValue);

            console.log("maxValue :", maxValue);

            if (maxValue - minValue < priceGap) {
                if (event.target.className.includes("min-value")) {
                    rangeInputs[0].value = maxValue - priceGap;
                    console.log("true");
                } else {
                    rangeInputs[1].value = minValue + priceGap;
                    console.log("false");
                }
            } else {
                // rangeInputs[0].value = minValue;
                // rangeInputs[1].value = maxValue;
                maxPriceValue.innerHTML = maxValue.toLocaleString();
                minPriceValue.innerHTML = minValue.toLocaleString();
                progress.style.left =
                    (minValue / rangeInputs[0].max) * 100 + "%";
                progress.style.right =
                    100 - (maxValue / rangeInputs[1].max) * 100 + "%";
            }
        });
    });

    // const maximumIcon = document.getElementById('maximum-range-icon')
    // const rangeSlider = document.getElementById('range-slider')

    // maximumIcon.addEventListener('mousedown', (event) => {
    //     console.log('mouse down maximum range')
    // })

    // maximumIcon.addEventListener('pointerdown', (event) => {
    //     console.log('pointerdown maximum range')
    // })

    // maximumIcon.addEventListener('pointerup', (event) => {
    //     console.log('pointerup maximum range')
    // })
    // const minimumInputSlider = document.getElementById('minimum-slider-input')
    // const maximumInputSlider = document.getElementById('maximum-slider-input')

    // minimumInputSlider.addEventListener('change', event => {
    //     console.log(event.target.value)
    // })

    // maximumInputSlider.addEventListener('change', event => {
    //     console.log(event.target.value)
    // })

    const filterMenuBtns = document.querySelectorAll(".filter-menu__btn");

    filterMenuBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.currentTarget.classList.toggle("filter-menu--toggle");
        });
    });

    productsFilteringMenuBtn.addEventListener('click', () => {
        productsFilteringMenu.classList.toggle('!flex')
    })

    const swiper = new Swiper(".mySwiper4", {
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
});

document.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
        document
            .querySelector("#bottom-header")
            .classList.add("bottom-header--scroll");
    } else {
        document
            .querySelector("#bottom-header")
            .classList.remove("bottom-header--scroll");
    }
});

const rangeInput = document.querySelectorAll(".range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    range = document.querySelector(".slider .progress");
let priceGap = 1000;

priceInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value),
            maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
            if (e.target.className === "input-min") {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right =
                    100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach((input) => {
    input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value),
            maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
    });
});
