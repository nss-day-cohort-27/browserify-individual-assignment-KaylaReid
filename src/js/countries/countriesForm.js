// build from and grap values for database

const addCountry = () => {
    $("#country-form-div").append(`
        <div class="d-flex" id="city-form">
            <h3 class="section-header">Countries I've been to</h3>
            <button type="button" id="add-country-button" class="btn btn-primary ml-3" data-toggle="modal" data-target="#country-modal">Add More</button>
        </div>
  
        <div id="country-modal" class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Add a new country!</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div>Country: <br><input id="country-name" type="text"></div>
            <div>Year I visited: <br><input id="country-year-visited" type="text"></div>
            <div>Favorite memory from country: <br><input id="country-favThing" type="text"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button id="save-country-button" type="button" data-dismiss="modal" class="btn btn-primary">Save this country</button>
            </div>
          </div>
        </div>
        </div>`)
  }
  
  function clearCountryForm() {
      $("#country-name").val("")
      $("#country-year-visited").val("")
      $("#country-favThing").val("")
  }
  
  module.exports = {addCountry, clearCountryForm};