const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "lunch",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 10,
        title: "steak dinner",
        category: "dinner",
        price: 39.99,
        img: "./images/item-1.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut`,
    },
]

const foodItems = document.querySelector('.food-items')
const buttons = document.querySelector('.buttons')



window.addEventListener('load', function (e) {
    returnHtml(menu)
    returnBtn()
})







function returnBtn() {

    const categories = menu.reduce(function (values,item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values
    }, ['all'])

    const categoryBtns = categories.map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`
    }).join('')
    buttons.innerHTML = categoryBtns
    const filterBtns = buttons.querySelectorAll(".filter-btn")
    console.log(filterBtns)

    filterBtns.forEach(function (eachBtn) {
        eachBtn.addEventListener('click', function (event) {

            let category = (event.target.dataset.id)

            let filterMenu = menu.filter(function (item) {
                return item.category === category
            })

            if (category === 'all') {
                returnHtml(menu)
            }
            else {
                returnHtml(filterMenu)
            }
        })
    })

}






function returnHtml(returnItem) {

    let newMenu = returnItem.map(menuItem => {

        return `<div class="food-item ${menuItem.category}">
            <div class="food-img">
                <img src="${menuItem.img}" alt="${menuItem.title}" srcset="">
            </div>
            <div class="food-info">
                <div class="food-info-up">
                    <span class="name">${menuItem.title}</span>
                    <span class="price">$${menuItem.price}</span>
                </div>
                <div class="line"></div>
                <div class="food-info-down">
                    <p>${menuItem.desc}</p>
                </div>
            </div>
        </div>`

    })

    newMenu = newMenu.join('')
    foodItems.innerHTML = newMenu
}
