

const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const burgerMenu = document.querySelector('.menu')
const carritoIcon = document.querySelector('.navbar-shopping-cart')
const productDetail = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

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


const productList = []
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
        
        const productInfo = document.createElement('div')
        productInfo.classList.add('product-info')
        
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
        productInfo.append(productInfoDiv, productInfoFigure)
        productCard.append(productImg, productInfo)
        cardsContainer.appendChild(productCard)
    
    }
}
renderProducts(productList)