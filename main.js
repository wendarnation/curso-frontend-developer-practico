

const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenu = document.querySelector('.menu')
const carritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')

const showDesktopMenu = () => {
    productDetail.classList.add('product-detail-inactive')
    desktopMenu.classList.toggle('profile-inactive')
}
navEmail.addEventListener('click', showDesktopMenu)

const showProductDetail = () => {
    desktopMenu.classList.add('profile-inactive')
    productDetail.classList.toggle('product-detail-inactive')
    mobileMenu.classList.add('mobile-inactive')
}
carritoIcon.addEventListener('click', showProductDetail)

const showMobileMenu = () => {
    productDetail.classList.add('product-detail-inactive')
    mobileMenu.classList.toggle('mobile-inactive')
}
burgerMenu.addEventListener('click', showMobileMenu)