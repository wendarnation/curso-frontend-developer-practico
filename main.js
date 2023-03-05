

const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenu = document.querySelector('.menu')

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('profile-inactive')
}
navEmail.addEventListener('click', toggleDesktopMenu)

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('mobile-inactive')
}
burgerMenu.addEventListener('click', toggleMobileMenu)