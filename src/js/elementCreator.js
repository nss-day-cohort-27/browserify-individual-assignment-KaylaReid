// create, place and set attributes of needed containers 

const elementCreator = () => {
    let body = document.querySelector("body");
    let script = document.querySelector("script");
    let wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");
    body.insertBefore(wrapper, script);
    wrapper.innerHTML += 
        `<div>
            <h1 class="header-main"><spa id="words">Oh the places you'll go...</spa></h1>
        </div>
        <div>
            <div id="city-container">
                <div id="city-form-div"></div>
                <div id="city-list-div"></div>
            </div><hr>
            <div id="country-container">
                <div id="country-form-div"></div>
                <div id="country-list-div"></div>
            </div><hr>
            <div id="food-drink-container">
                <div id="food-drink-form-div"></div>
                <div id="food-drink-list-div"></div>
        </div>
        </div>`
}
module.exports = elementCreator;