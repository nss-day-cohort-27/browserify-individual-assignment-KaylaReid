const countryList = (country) => {
    $("#country-list-div").append(`
            <div id="country--${country.id}" class="card mb-3 mt-2 country-card">
                <div class="card-body">
                    <div>
                        <h3 class="country-name card-title">Country: ${country.name}</h3>
                        <h4 class="country-year">Year I visted: ${country.year}</h4>
                    </div>
                    <div>
                        <p class="fav-things card-text"><span>My favorite things about it: </span>${country.favThing}</p>
                        <h5 class="date"><small>${country.date}</small></h5>
                    </div>
                    <button class="btn button" id="delete-country--${country.id}">Delete</button>
                </div>
            </div>`)
}
module.exports = countryList;
