// build DOM reps of cities, resturants, and counties
const cityList = (city) => {
    $("#city-list-div").append(`
            <div id="city--${city.id}" class="card w-50  mb-2 mt-2">
                <div class="card-body">
                    <div>
                        <h3 class="city-name card-title">City: ${city.name}</h3>
                        <h4 class="city-rating">Rating <small>(out of 10)</small>: ${city.rating}</h4>
                    </div>
                    <div>
                        <p class="fav-things card-text"><span>My favorite things about it: </span>${city.favThing}</p>
                        <h5 class="date"><small>${city.date}</small></h5>
                    </div>
                    <button id="delete-city--${city.id}" class="btn btn-primary">Delete</button>
                </div>
            </div>`)
}
module.exports = cityList;
