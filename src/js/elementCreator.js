// create, place and set attributes of needed containers 

const elementCreator = () => {
    let body = document.querySelector("body");
    let script = document.querySelector("script");
    let wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");
    body.insertBefore(wrapper, script);
    wrapper.innerHTML += 
        `<div>
            <h1 class="header">Oh the places you'll go...</h1>
        </div>
        <div>
            <div id="city-container">
                <div id="city-form-div"></div>
                <div id="city-list-div"></div>
            </div>
            <div id="resturant-container">
                <div id="resturant-form-div"></div>
                <div id="resturant-list-div"></div>
            </div>
            <div id="country-container">
                <div id="country-form-div"></div>
                <div id="country-list-div"></div>
            </div>
        </div>`
}
module.exports = elementCreator;