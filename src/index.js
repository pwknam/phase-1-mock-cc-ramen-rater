fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            addRamenToMenu(item)
            // console.log(item)

        })
    })

//global variables (below)
let ramenMenu = document.querySelector("#ramen-menu")
let detailImage = document.querySelector(".detail-image")
let detailName = document.querySelector(".name")
let detailRestaurant = document.querySelector(".restaurant")
let detailRating = document.querySelector("#rating-display")
let detailComment = document.querySelector("#comment-display")
let form = document.querySelector("#new-ramen")

//function to add ramen to ramen menu
function addRamenToMenu(item) {
    let image = document.createElement("img")
    image.src = item.image
    ramenMenu.appendChild(image)

    image.addEventListener("click", function (e) {
        showMeMyRamen(item)
    })
}

//function for displaying the selected ramen 
function showMeMyRamen(item) {
    detailImage.src = item.image
    detailName.textContent = item.name
    detailRestaurant.textContent = item.restaurant
    detailRating.textContent = item.rating
    detailComment.textContent = item.comment
}

form.addEventListener("submit", function (e) {
    e.preventDefault()
    let newRamenName = document.querySelector("#new-name")
    let newRamenRestaurant = document.querySelector("#new-restaurant")
    let newRamenImage = document.querySelector("#new-image")
    let newRamenRating = document.querySelector("#new-rating")
    let newRamenComment = document.querySelector("#new-comment")

    let newRamenObject = {
        name: newRamenName.value,
        restaurant: newRamenRestaurant.value,
        image: newRamenImage.value,
        rating: newRamenRating.value,
        comment: newRamenComment.value
    }

    addRamenToMenu(newRamenObject)
    
    form.reset()
})

