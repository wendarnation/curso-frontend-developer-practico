

const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenu = document.querySelector('.menu')
const carritoIcon = document.querySelector('.navbar-shopping-cart')
const products = document.querySelector('.product')
const cardsContainer = document.querySelector('.cards-container')
const productDetail = document.querySelector('.product-detail')
const productDetailClose = document.querySelector('.product-detail-close')

const showDesktopMenu = () => {
    products.classList.add('product-inactive')
    desktopMenu.classList.toggle('profile-inactive')
    productDetail.classList.add('product-detail-inactive')
}
navEmail.addEventListener('click', showDesktopMenu)

const showProducts = () => {
    desktopMenu.classList.add('profile-inactive')
    products.classList.toggle('product-inactive')
    mobileMenu.classList.add('mobile-inactive')
    productDetail.classList.add('product-detail-inactive')
}
carritoIcon.addEventListener('click', showProducts)

const showMobileMenu = () => {
    products.classList.add('product-inactive')
    mobileMenu.classList.toggle('mobile-inactive')
    productDetail.classList.add('product-detail-inactive')
}
burgerMenu.addEventListener('click', showMobileMenu)

const showProductDetail = () => {
    productDetail.classList.remove('product-detail-inactive')
    products.classList.add('product-inactive')
    mobileMenu.classList.add('mobile-inactive')
    desktopMenu.classList.add('profile-inactive')
}

const closeProductDetail = () => {
    productDetail.classList.add('product-detail-inactive')
}


const productList = []
productList.push({
    Name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    Name: 'Bike',
    Price: 140,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    Name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    Name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    Name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    Name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    Name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    Name: 'Bike',
    Price: 120,
    Image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

/*
            <div class="product-card">
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
                <div class="product-info">
                    <div>
                        <p>$120,00</p>
                        <p>Bike</p>
                    </div>
                    <figure>
                        <img src="./icons/bt_add_to_cart.svg" alt="">
                    </figure>
                </div>
            </div>
*/

const renderProducts = (arr) => {
    for(product of productList) {
        const productCard = document.createElement('div')
        productCard.classList.add('product-card')
        
        const productImg = document.createElement('img')
        productImg.setAttribute('src', product.Image)
        
        const productInfoList = document.createElement('div')
        productInfoList.classList.add('product-info-list')
        
        const productInfoDiv = document.createElement('div')
        
        const productPrice = document.createElement('p')
        productPrice.innerText = '$' + product.Price
        
        const productName = document.createElement('p')
        productName.innerText = product.Name
        
        const productInfoFigure = document.createElement('figure')
        const productImgCart = document.createElement('img')
        productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg')
        
        productInfoFigure.appendChild(productImgCart)
        productInfoDiv.append(productPrice, productName)
        productInfoList.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg, productInfoList)
        cardsContainer.appendChild(productCard)
        productCard.addEventListener('click', showProductDetail)
        productDetailClose.addEventListener('click', closeProductDetail)
    }
}
renderProducts(productList)