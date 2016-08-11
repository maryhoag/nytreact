var React = require("react");

//require children here
var Search = require("./Components.Search");
var Saved = require("./Components.Saved");
//helper functions 
var helpers = require("./utils/helpers.js");

var Main = React.createClass({


	getInitialState: function() {

		return {
			//variables set here
		}//closes return
	}, //closes State

	//functions

	render: function() {

		return(

			<div className="wrapper">
				<div class="row">
					<h1>New York Times Article Scrubber<small>All The News That's Fit to Scrape</small></h1>
				</div> {/*closes heading*/}

				<div className="container">
					
					<Search />

				</div> {/*closes container*/}


			</div> {/*closes wrapper*/}

		) {/*closes return*/}
	} {/*closes render*/}

}); {/*closes Main*/}

module.exports = Main;