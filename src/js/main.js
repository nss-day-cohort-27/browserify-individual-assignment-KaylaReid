const dataManager = require("./DataManager")
const elementCreator = require("./elementCreator")
const cityForm = require("./cities/cityForm")
const cityList = require("./cities/cityDom")
const countryForm = require("./countries/countriesForm")
const countriesList = require("./countries/countriesDom")
const foodDrinkForm = require("./foodDrink/foodDrinkForm")
const foodDrinkList = require("./foodDrink/foodDrinkDom")
const getDate = require("./date")

// this populates my DOM structure
elementCreator();
cityForm.addCity();
countryForm.addCountry();
foodDrinkForm.addFoodDrink();

dataManager.getData.getCities()
        .then(cities => {
            cities.forEach(city => {
                cityList(city)
            });
        })
dataManager.getData.getCountries()
        .then((countries) => {
            countries.forEach(country => {
                countriesList(country)
            })
        })
dataManager.getData.getfoodDrinks()
        .then((foodDrinks) => {
            foodDrinks.forEach(foodDrink => {
                foodDrinkList(foodDrink)
            })
        })


// global event listener
$("body").on("click", (e) => {
    // city event listeners
    if(e.target.id === "save-city-button") {
        let city = {
            name: $("#city-name").val(),
            rating: $("#city-rating").val(),
            favThing: $("#city-favThing").val(),
            date: getDate()
        }
        cityForm.clearCityForm();
        $("#city-list-div").html("")
        dataManager.saveData.saveCities(city)
            .then (() => {
                dataManager.getData.getCities()
                .then(cities => {
                    cities.forEach(city => {
                        cityList(city)
                    });
                })
            })
    }
    if(e.target.id.includes("delete-city")) {
        let deleteId = e.target.id.split("--")[1]
        dataManager.deleteData.deleteCities(deleteId)
        .then (() => {
            e.target.parentNode.remove();
        })
    }
    // countries
    if(e.target.id === "save-country-button") {
        let country = {
            name: $("#country-name").val(),
            year: $("#country-year-visited").val(),
            favThing: $("#country-favThing").val(),
            date: getDate()
        }
        countryForm.clearCountryForm();
        $("#country-list-div").html("")
        dataManager.saveData.saveCountries(country)
            .then (() => {
                dataManager.getData.getCountries()
                .then(country => {
                    country.forEach(country => {
                        countriesList(country)
                    });
                })
            })
    }
    if(e.target.id.includes("delete-country")) {
        let deleteId = e.target.id.split("--")[1]
        dataManager.deleteData.deleteCountries(deleteId)
        .then (() => {
            e.target.parentNode.remove();
        })
    }
    // food and drink places event listener
    if(e.target.id === "save-place-button") {
        let place = {
            name: $("#place-name").val(),
            rating: $("#place-rating").val(),
            favThing: $("#place-favThing").val(),
            date: getDate()
        }
        foodDrinkForm.clearFoodDrink();
        $("#food-drink-list-div").html("")
        dataManager.saveData.savefoodDrinks(place)
            .then (() => {
                dataManager.getData.getfoodDrinks()
                .then(foodDrinks => {
                    foodDrinks.forEach(foodDrink => {
                        foodDrinkList(foodDrink)
                    });
                })
            })
    }
    if(e.target.id.includes("delete-place")) {
        console.log(e.target)
        let deleteId = e.target.id.split("--")[1]
        dataManager.deleteData.deletefoodDrinks(deleteId)
        .then (() => {
            e.target.parentNode.remove();
        })
    }
   
})