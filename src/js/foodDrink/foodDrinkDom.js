const foodDrinkList = (place) => {
    $("#food-drink-list-div").append(`
            <div id="food-drink--${place.id}" class="card w-50 mb-2 mt-2">
                <div class="card-body">
                    <div>
                        <h3 class="place-name card-title">Place: ${place.name}</h3>
                        <h4 class="place-rating">Rating <small>(out of 10)</small>: ${place.rating}</h4>
                    </div>
                    <div>
                        <p class="place-fav-things card-text"><span>My favorite things to order: </span>${place.favThing}</p>
                        <h5 class="date"><small>${place.date}</small></h5>
                    </div>
                    <button id="delete-place--${place.id}" class="btn btn-primary">Delete</button>
                </div>
            </div>`)
}
module.exports = foodDrinkList;
