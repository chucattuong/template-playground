import {items, forKids} from './data.js'

function start(){
    headerItems()
    footerItems()
}

start()

function headerItems(){
    var wrapperItem = document.querySelector('.category__list')
    var htmls = items.map(item =>{
        return`
            <li id=${item.id} class="category__item">
                <img src="${item.src}" alt="" class="category__image">
                <h3 class="category__name">${item.name}</h3>
                <a href="#" class="category__details">${item.desc} <i class="fas fa-arrow-to-right"></i></a>
            </li>
        `
    })
    wrapperItem.innerHTML = htmls.join("")

}

function footerItems(){
    var wrapperItem = document.querySelector('.connect__list')
    var htmls = forKids.map(item =>{
        return`
            <li class="connect__item">
                <img src="${item.src}" alt="" class="connect__image">
            </li>
        `
    })
    wrapperItem.innerHTML = htmls.join("")

}
