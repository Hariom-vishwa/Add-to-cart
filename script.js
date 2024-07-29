let openShopping = document.querySelector('.shopping')
let closeShopping = document.querySelector('.closeShopping')
let list = document.querySelector('.list')
let listCard = document.querySelector('.listCard')
let body = document.querySelector('body')
let total = document.querySelector('.total')
let quantity = document.querySelector('.quantity')

// To Open Cart 

openShopping.addEventListener('click', () => {
    body.classList.add('active');
})

// To Close Cart 

closeShopping.addEventListener('click', () => {
    body.classList.remove('active')
})



// Product List 

const products = [
    {
        pic: "https://sportyandrich.com/cdn/shop/files/CALIFORNIATSHIRTNAVY-1.jpg",
        name: "T-shirt",
        price: 249
    },
    {
        pic: "https://m.media-amazon.com/images/I/61DXjQ6rrzL._SY695_.jpg",
        name: "Shoe",
        price: 1399
    },
    {
        pic: "https://paganidesign.co/cdn/shop/products/2022-New-BENYAR-Design-Original-Brand-Men-s-Mechanical-Watches-Men-Wristwatch-100M-Waterproof-Casual_5.jpg",
        name: "Wrist Watch",
        price: 2999
    },
    {
        pic: "https://images.pexels.com/photos/5741129/pexels-photo-5741129.jpeg",
        name: "Sunglass",
        price: 559
    },
    {
        pic: "https://images.pexels.com/photos/3394648/pexels-photo-3394648.jpeg",
        name: "Headphone",
        price: 2199
    },
    {
        pic: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        name: "Running Shoe",
        price: 3999
    }
];


let listCards = [];

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div')
        newDiv.classList.add('item');

        newDiv.innerHTML = `
        <img src="${value.pic}"/>
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add to Cart</button> 
        `;
        list.appendChild(newDiv);
    })
}
initApp()



// Add to cart function 

function addToCart(key) {
    if (listCards[key] == null) {
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCart()
}



// Cart Card 

function reloadCart() {
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.pic}"/></div>
                <div>${value.name}</div>
                <div>Rs.${value.price.toLocaleString()}/-</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>
            `
            listCard.appendChild(newDiv)
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}



// Change quantity 

function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart()
}
