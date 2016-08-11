var React = require("react");
var ReactDOM = require("react-dom");

var Router = require("react-router").Router

var routes = require('./config/routes');

//require children here if necess

//var Main = require("./Components/Main");

ReactDOM.render(

	//<Main />,
	<Router>{routes}</Router>,
	document.getElementById("app")

)