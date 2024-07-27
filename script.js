const products = [
    {
        pic: "https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg",
        name: "T-shirt",
        price: "Rs. 249/-"
    },
    {
        pic: "https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg",
        name: "Shoe",
        price: "Rs. 1,399/-"
    },
    {
        pic: "https://images.pexels.com/photos/14464638/pexels-photo-14464638.jpeg",
        name: "Wrist Watch",
        price: "Rs. 2,999/-"
    },
    {
        pic: "https://images.pexels.com/photos/5741129/pexels-photo-5741129.jpeg",
        name: "Sunglass",
        price: "Rs. 559/-"
    },
    {
        pic: "https://images.pexels.com/photos/3394648/pexels-photo-3394648.jpeg",
        name: "Headphone",
        price: "Rs. 2,199/-"
    },
    {
        pic: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        name: "Running Shoe",
        price: "Rs. 3,999/-"
    }
];

const container = document.querySelector("#container")


function productCards() {
    products.forEach((value, key) => {
        const proCard = document.createElement("div")
        proCard.id = "cardCont"
        container.appendChild(proCard)

        proCard.innerHTML = `
<div id="card">
    <img id="proPic" src="${value.pic}">
    <div id="proName">${value.name}</div>
    <div id="proPrice">${value.price}</div>
    <button id="addBtn">Add to Cart</button>
</div>
`
    })
}
productCards()