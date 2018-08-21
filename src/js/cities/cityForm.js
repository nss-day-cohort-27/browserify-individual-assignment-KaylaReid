// build from and grap values for database

const addCity = () => {
  $("#city-form-div").append(`
      <div class="d-flex" id="city-form">
          <h3>Cities I've been to</h3>
          <button type="button" id="add-city-button" class="btn btn-primary ml-3" data-toggle="modal" data-target="#city-modal">Add More</button>
      </div>

      <div id="city-modal" class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Add a new city!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
          <div>City Name: <br><input id="city-name" type="text"></div>
          <div>Rating of how much you like this city out of 10: <input id="city-rating" type="text"></div>
          <div>Favorite things about this city: <br><input id="city-favThing" type="text"></div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button id="save-city-button" type="button" class="btn btn-primary">Save this city</button>
          </div>
        </div>
      </div>
      </div>`)
}

function clearCityForm() {
    $("#city-name").val("")
    $("#city-rating").val("")
    $("#city-favThing").val("")
}

module.exports = {addCity, clearCityForm};