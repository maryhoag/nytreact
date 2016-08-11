// SETUP VARIABLES
// ==========================================================

// NYT auth key
var authKey = "3b9d60ec52814ef48e9ca3a2984b739f";

// the results from the user's inputs
var queryTerm 	= "";
//!!!!! this should be only 5
var numResults 	= 0;
var startYear 	= 0;
var endYear		= 0;

// base queryURL 
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// Array to hold the various article info
var articleCounter = 0;

// FUNCTIONS
// ==========================================================


// This runQuery function expects two parameters (the number of articles to show and the final URL to download data from)
function runQuery(numArticles, queryURL){

	// The AJAX function uses the URL and Gets the JSON data associated with it. The data then gets stored in the variable called: "NYTData"
	$.ajax({url: queryURL, method: "GET"}) 
		.done(function(NYTData) {

			// logs the URL
			console.log("------------------------------------")
			console.log("URL: " + queryURL);
			console.log("------------------------------------")

			// logs the object returned from the query
			console.log(NYTData);
			console.log("------------------------------------")

			// Loop to provide the correct number of articles
			for (var i=0; i<numArticles; i++) {

					// Add to the Article Counter (to make sure we show the right number)
					articleCounter++;

					// Create the HTML Well (Section) and Add the Article content for each
					///!!! DELETE this since will be going to react
					var wellSection = $("<div>");
					wellSection.addClass('well');
					wellSection.attr('id', 'articleWell-' + articleCounter)
					$('#wellSection').append(wellSection);

					// Confirm that the JSON for the article isn't missing any details
					
					if(NYTData.response.docs[i].headline != "null")
					{
						$("#articleWell-"+ articleCounter).append('<h3 class="articleHeadline"><span class="label label-primary">' + articleCounter + '</span><strong>   ' + NYTData.response.docs[i].headline.main + "</strong></h3>");
						
						// Log the first article's Headline to console.
						console.log(NYTData.response.docs[i].headline.main);
					}
					
					// If the article has a Byline include the headline in the HTML
					//!!!!!! DELETE not needed
					// if( NYTData.response.docs[i].byline && NYTData.response.docs[i].byline.hasOwnProperty("original"))
					// {
					// 	$("#articleWell-"+ articleCounter).append('<h5>' + NYTData.response.docs[i].byline.original + "</h5>");

						// Log the first article's Author to console.
						//console.log(NYTData.response.docs[i].byline.original);
					//}

					//!!!!!!! DELETE not needed since going to react
					// Then display the remaining fields in the HTML (Date, URL)
					//$("#articleWell-"+ articleCounter).append('<h5>Section: ' + NYTData.response.docs[i].section_name + "</h5>");
					$("#articleWell-"+ articleCounter).append('<h5>' + NYTData.response.docs[i].pub_date + "</h5>");
					$("#articleWell-"+ articleCounter).append("<a href='" + NYTData.response.docs[i].web_url + "'>" + NYTData.response.docs[i].web_url + "</a>");

					// Log the remaining fields to console as well
					console.log(NYTData.response.docs[i].pub_date);
					//!!!!! DELETE not needed
					//console.log(NYTData.response.docs[i].section_name);
					console.log(NYTData.response.docs[i].web_url);	
			}
		});

}

// METHODS  ===> move to another file?
// ==========================================================
	
	// On Click button associated with the Search Button
	//!!!!!!!!! CHECK THIS ID
	$('#runSearch').on('click', function(){

		// Initially sets the articleCounter to 0
		articleCounter = 0;

		// Empties the region associated with the articles
		$("#wellSection").empty();

		// Search Term
		var searchTerm = $('#searchTerm').val().trim();
		queryURL = queryURLBase + searchTerm;

		// Num Results
		//!!!!!! DELETE not needed
		//numResults = $("#numRecordsSelect").val();

		// Start Year
		startYear = $('#startYear').val().trim();

		// End Year
		endYear = $('#endYear').val().trim();

		// If the user provides a startYear -- the startYear will be included in the queryURL
		if (parseInt(startYear)) {
			queryURL = queryURL + "&begin_date=" + startYear + "0101";
		}

		// If the user provides a startYear -- the endYear will be included in the queryURL
		if (parseInt(endYear)) {
			queryURL = queryURL + "&end_date=" + endYear + "0101";
		}

		// Then we will pass the final queryURL and the number of results to include to the runQuery function
		runQuery(numResults, queryURL);

		// This line allows us to take advantage of the HTML "submit" property. This way we can hit enter on the keyboard and it registers the search (in addition to clicks).
		return false;
	});	

// This button clears the top articles section
//!!!!!! DELETE this since going to react
$('#clearAll').on('click', function(){
	articleCounter = 0;
	$("#wellSection").empty();
})