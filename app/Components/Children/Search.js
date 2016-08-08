var React = require("react");

//other dependencies

var Search = React.createClass({

	//State and functions here

	render: function(){

		return (
			//code on the page here
			<div className="card-panel teal lighten-4">
				<div className="card-title">
					<h3 className="white-text valign center">Search</h3>
				</div>

				<form className="col s10">
					<div className="row">
						<div className="input-field">
							<input placeholder="search term" id="searchTerm" type="text" class="validate">
							<label for="searchTerm">search term</label>
						</div> 
					</div>

					<div className="row">
						<div className="col s6">
							<div className="input-field">
								<input placeholder="start year" id="startYear" type="text" class="validate">
								<label for="startYear">start year</label>
							</div
						</div> 
						<div className="col s6">
							<div className="input-field">
								<input placeholder="end year" id="end year" type="text" class="validate">
								<label for="end year">end year</label>
							</div>
						</div>
						<a class="btn-large waves-effect waves-light valign center-block"><i class="material-icons">search</i></a> 
					</div
				</form>

			</div> {/*closes search panel*/}


		)
	}
});

module.exports = Search;