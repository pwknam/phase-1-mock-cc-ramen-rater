fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(data => {
        
        //advanced deliverable 1
        showMeMyRamen(data[0])
        
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
let updateForm = document.querySelector("#edit-ramen")

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

//form submission to add another ramen to the menu
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

//advanced deliverable number 2 
updateForm.addEventListener("submit", function(e){
    e.preventDefault()
    let updateRating = updateForm.querySelector("#new-rating")
    let updateComment = updateForm.querySelector("#new-comment")

    detailRating.textContent = updateRating.value
    detailComment.textContent = updateComment.value

    updateForm.reset()
})