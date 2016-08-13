var React = require("react");

//other dependencies
var helpers = require("../utils/searchNYT.js");

var Search = React.createClass({

	//State and functions here
	getInitialState: function() {

		return {
		'authKey': "3b9d60ec52814ef48e9ca3a2984b739f",

		// the results from the user's inputs
		'queryTerm': "",
		//!!!!! this should be only 5
		'numResults': 0,
		'startYear': 0,
		'endYear':	0
		}
	},

	render: function(){

		return (
			//code on the page here
			
					
			<div className="card-panel">
				<div className="card-title">
					<h3 className="valign center">Search</h3>
				</div>

				<form className="col s10">
					<div className="row">
						<div className="input-field">
							<input placeholder="search term" id="searchTerm" type="text" class="validate"></input>
							<label for="searchTerm">search term</label>
						</div> 
					</div>

					<div className="row">
						<div className="col s6">
							<div className="input-field">
								<input placeholder="start year" id="startYear" type="text" class="validate"></input>
								<label for="startYear">start year</label>
							</div>
						</div> 
						<div className="col s6">
							<div className="input-field">
								<input placeholder="end year" id="end year" type="text" class="validate"></input>
								<label for="end year">end year</label>
							</div>
						</div>
						<button id="runSearch" class="btn waves-effect waves-light" type="submit" name="action">search
						    <i class="material-icons right">send</i>
						</button>

					</div>
				</form>

			</div> 

		)
	}
});

module.exports = Search;