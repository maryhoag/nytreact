// Inclue the React library
var React = require('react');

// Include the Router
var Router = require('react-router');
var Route = Router.Route;

//  Include the IndexRoute (catch-all route)
var IndexRoute	= Router.IndexRoute;

// Reference the high-level components
var Main = require('../Components/Main');
var Search = require('../Components/Children/Search'); 
var Results = require('../Components/Children/Results'); 
var Saved = require('../Components/Children/Saved');
{/*var GrandChild1 = require('../components/Children/Grandchildren/GrandChild1');
var GrandChild2 = require('../components/Children/Grandchildren/GrandChild2');*/}

// Export the Routes
module.exports = (

	/*High level component is the Main component*/
	<Route path='/' component={Main}>

		{/* If user selects Child1 then show the appropriate component*/}
		<Route path='Search' component={Search} >

			{/*Child1 has its own Grandchildren options*/}
			 {/*<Route path='GrandChild1' component={GrandChild1} />
			 <Route path='GrandChild2' component={GrandChild2} />*/}

			<IndexRoute component={Search} />

		</Route>

		{/* If user selects Child2 then show the appropriate component*/}
		<Route path='Results' component={Results} />

		{/*If user selects any other path... we get the Home Route*/}
		{/*<IndexRoute component={Child1} /> */}

		<Route path="Saved" component={Saved} />
		
	</Route>


);