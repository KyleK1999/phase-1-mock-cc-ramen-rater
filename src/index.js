// write your code here
//Globals
const URL = "http://localhost:3000/ramens"



//Fetches
function getAllRamen(url) {
    return fetch(url)
          .then(response => response.json())
}


//Render Functions
function renderInNav(ramenObj){
    console.log('ramenObj:' , ramenObj)
    const img = document.createElement('img')
    img.src = ramenObj.image
    img.addEventListener('click', () => renderDetail(ramenObj))
    nav.appendChild(img)
}
//new ramen form
const newRamenForm = document.getElementById('new-ramen')
const ramenMenu = document.getElementById('ramen-menu')


const nav = document.querySelector('#ramen-menu')
const detailImage = document.querySelector(".detail-image")
//
const ramenName = document.querySelector(".name")
const restaurant = document.querySelector(".restaurant")
const rating = document.getElementById('rating-display')
const comment = document.getElementById('comment-display')
const ramenImage = document.querySelector('ramen-image')


function renderDetail(ramenObj){
    detailImage.src = ramenObj.image
    ramenName.textContent = ramenObj.name
    restaurant.textContent = ramenObj.restaurant
    rating.textContent = ramenObj.rating
    comment.textContent = ramenObj.comment
} 




//Event Handlers & Listeners




//Initializers
getAllRamen(URL).then(ramenArr => {
    ramenArr.forEach(renderInNav)
    renderDetail(ramenArr[0])
})