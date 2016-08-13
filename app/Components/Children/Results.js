var React = require("react");

var Results = React.createClass({

	render: function() {
		return(

			<div className="card-panel green lighten-4">

				<div className="card-title">
					<h3 className="white-text valign center">Results</h3>
				</div>

				{/* format for results list*/}
				<div>
					<p>title here align left </p> {/*if time add details in card reveal*/} 
					<a className="waves-effect waves-light btn"><i class="material-icons left">input</i>save</a>

				</div>


			</div> 
			

		)
	}
});

module.exports = Results;