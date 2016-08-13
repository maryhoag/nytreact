var React = require("react");

//require children here
var Search = require("./Children/Search");
var Saved = require("./Children/Saved");
var Results =require("./Children/Results");
//helper functions 
var helpers = require("./utils/searchNYT.js");

var Main = React.createClass({

	//variables are in search
	// getInitialState: function() {

	// 	return {
	// 		//variables set here

	// 	}//closes return
	// }, //closes State

	//functions

	render: function() {

		return(

			<div className="wrapper">
				<div class="row">
					<h1>NYT Articles<small>All The News That's Fit to Search</small></h1>
				</div> {/*closes heading*/}

				<div className="container">

					<Search />

					{/*<Results />

					<Saved />*/}
				</div> {/*closes container*/}


			</div> 
		)
	} 

}); 

module.exports = Main;