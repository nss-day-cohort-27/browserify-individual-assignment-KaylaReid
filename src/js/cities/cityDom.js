// build DOM reps of cities, resturants, and counties
const cityList = (city) => {
    $("#city-list-div").append(`
            <div id="city--${city.id}">
                <div>
                    <h3 class="city-name">City: ${city.name}</h3>
                    <h4 class="rating">Rating <small>(out of 10)</small>: ${city.rating}</h4>
                </div>
                <div>
                    <p class="fav-things"><span>My favorite things about it: </span>${city.favThing}</p>
                </div>
                <button id="delete-city--${city.id}">Delete</button>
            </div>`)
}
module.exports = cityList;