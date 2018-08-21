const addFoodDrink = () => {
    $("#food-drink-form-div").append(`
        <div class="d-flex" id="food-drink-form">
            <h3 class="section-header">Best food & drink places I've been to</h3>
            <button type="button" id="add-food-drink-button" class="btn button ml-3" data-toggle="modal" data-target="#food-drink-modal">Add More</button>
        </div>
  
        <div id="food-drink-modal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add a food or drink spot</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div>Place: <br><input id="place-name" type="text"></div>
            <div>Rating of how much you like this place out of 10: <input id="place-rating" type="text"></div>
            <div>Favorite things to order: <br><input id="place-favThing" type="text"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button id="save-place-button" type="button" data-dismiss="modal" class="btn button">Save this place</button>
            </div>
          </div>
        </div>
        </div>`)
  }
  
  function clearFoodDrink() {
      $("#place-name").val("")
      $("#place-rating").val("")
      $("#place-favThing").val("")
  }
  
  module.exports = {addFoodDrink, clearFoodDrink};