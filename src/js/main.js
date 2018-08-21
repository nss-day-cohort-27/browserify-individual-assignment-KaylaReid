const dataManager = require("./DataManager")
const elementCreator = require("./elementCreator")
const form = require("./cities/cityForm")
const cityList = require("./cities/cityDom")

// this populates my DOM structure
elementCreator();
form.addCity();
dataManager.getData.getCities()
            .then(cities => {
                cities.forEach(city => {
                    cityList(city)
                });
            })


// global event listener
$("body").on("click", (e) => {
        if(e.target.id === "save-city-button") {
        let city = {
            name: $("#city-name").val(),
            rating: $("#city-rating").val(),
            favThing: $("#city-favThing").val()
        }
        form.clearCityForm();
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
})