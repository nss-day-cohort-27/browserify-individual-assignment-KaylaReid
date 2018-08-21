// do the stuffs 
const getData = Object.create(null, {
    getCities: {
        value: () => {
            return fetch("http://localhost:8088/cities")
            .then(response => response.json())
        }
    },
    getfoodDrinks: {
        value: () => {
            return fetch("http://localhost:8088/foodDrinks")
            .then(response => response.json())
        }
    },
    getCountries: {
        value: () => {
            return fetch("http://localhost:8088/countries")
            .then(response => response.json())
        }
    }
})

const saveData = Object.create(null, {
    saveCities: {
        value: (city) => {
            return fetch("http://localhost:8088/cities", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                    body: JSON.stringify(city)
                })
                .then(response => response.json())
            }
    },
    savefoodDrinks: {
        value: (foodDrink) => {
            return fetch("http://localhost:8088/foodDrinks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(foodDrink)
            })
            .then(response => response.json())
        }
    },
    saveCountries: {
        value: (country) => {
            return fetch("http://localhost:8088/countries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
                body: JSON.stringify(country)
            })
            .then(response => response.json())
        }
    }
})

const deleteData = Object.create(null, {
    deleteCities: {
        value: (cityId) => {
            return fetch(`http://localhost:8088/cities/${cityId}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    },
    deletefoodDrinks: {
        value: (foodDrink) => {
            return fetch(`http://localhost:8088/foodDrinks/${foodDrink}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    },
    deleteCountries: {
        value: (country) => {
            return fetch(`http://localhost:8088/countries/${country}`, {
                method: "DELETE"
            })
            .then(response => response.json())
        }
    }
})

module.exports = {getData, saveData, deleteData};