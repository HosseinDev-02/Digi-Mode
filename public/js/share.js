
window.addEventListener('load', () => {
    const searchBox = document.querySelector('.search__box')
    const searchInput = document.querySelector('.search__input')
    const searchBoxIcon = document.querySelector('.search__btn svg use')
    const searchBtn = document.querySelector('#search-btn')
    const menu = document.querySelector('.menu')
    const mobileSubmenuBtn = document.querySelector('.mobile__submenu-btn')
    const mobileSubmenu = document.querySelector('.mobile__submenu')
    const mobileSubmenuBtnIcon = document.querySelector('.mobile__submenu-btn svg')
    const mobileMenuBtn = document.querySelector('#mobile-menu-btn')
    const mobileMenu = document.querySelector('.mobile__menu')
    const mobileMenuCloseBtn = document.querySelector('#mobile-menu-close-btn')
    const mobileBasketBtn= document.querySelector('#mobile-basket-btn')
    const mobileBasket = document.querySelector('.mobile__basket')
    const mobileBasketCloseBtn = document.querySelector('#mobile-basket-close-btn')

    mobileSubmenuBtn.addEventListener('click', e => {
        e.preventDefault()
        console.log('click menu or submenu')
        mobileSubmenu.classList.toggle('mobile__submenu--open')
        mobileSubmenuBtn.classList.toggle('text-red-500')
        mobileSubmenuBtnIcon.classList.toggle('rotate-180')
    })

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('mobile__menu--open')
        document.body.classList.add('overflow-y-hidden')
        document.body.classList.add('h-screen')
    })

    mobileMenuCloseBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('mobile__menu--open')
        document.body.classList.remove('overflow-y-hidden')
        document.body.classList.remove('h-screen')
    })

    mobileBasketBtn.addEventListener('click', () => {
        mobileBasket.classList.toggle('mobile__basket--open')
        document.body.classList.add('overflow-y-hidden')
        document.body.classList.add('h-screen')
    })

    mobileBasketCloseBtn.addEventListener('click', () => {
        mobileBasket.classList.remove('mobile__basket--open')
        document.body.classList.remove('overflow-y-hidden')
        document.body.classList.remove('h-screen')
    })


    searchBtn.addEventListener('click', e => {

        e.preventDefault()
        searchBtn.classList.toggle('hover:text-red-600')
        searchBtn.classList.toggle('text-red-600')
        searchInput.classList.toggle('px-2')
        menu.classList.toggle('menu--hidden')
        searchBox.classList.toggle('w-80')
        searchBox.classList.toggle('w-10')
        searchBox.classList.toggle('border')

        if(menu.className.includes('menu--hidden')) {
            searchBoxIcon.setAttribute('href', '#x-mark')
        }else {
            searchBoxIcon.setAttribute('href', '#search')
        }

    })


    document.addEventListener('scroll', e => {
        if(window.scrollY > 0) {
            document.querySelector('#bottom-header').classList.add('bottom-header--scroll')
        }else{
            document.querySelector('#bottom-header').classList.remove('bottom-header--scroll')
        }
    })
})
