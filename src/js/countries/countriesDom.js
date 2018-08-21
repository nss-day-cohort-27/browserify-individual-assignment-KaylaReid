const countryList = (country) => {
    $("#country-list-div").append(`
            <div id="country--${country.id}">
                <div>
                    <h3 class="country-name">Country: ${country.name}</h3>
                    <h4 class="country-year">Year I visted: ${country.year}</h4>
                </div>
                <div>
                    <p class="fav-things"><span>My favorite things about it: </span>${country.favThing}</p>
                </div>
                <button id="delete-country--${country.id}">Delete</button>
            </div>`)
}
module.exports = countryList;