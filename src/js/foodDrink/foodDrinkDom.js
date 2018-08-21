const foodDrinkList = (place) => {
    $("#food-drink-list-div").append(`
            <div id="food-drink--${place.id}">
                <div>
                    <h3 class="place-name">Place: ${place.name}</h3>
                    <h4 class="place-rating">Rating <small>(out of 10)</small>: ${place.rating}</h4>
                </div>
                <div>
                    <p class="place-fav-things"><span>My favorite things to order: </span>${place.favThing}</p>
                </div>
                <button id="delete-place--${place.id}">Delete</button>
            </div>`)
}
module.exports = foodDrinkList;