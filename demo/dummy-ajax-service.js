var superheroList = [
	{ key: 1, value: "Superman"},
	{ key: 2, value: "Batman"},
	{ key: 3, value: "Green Lantern"},
	{ key: 4, value: "Aquaman"},
	{ key: 5, value: "Captain America"},
	{ key: 6, value: "Captain Britain"},
	{ key: 7, value: "Deadpool"},
	{ key: 8, value: "Thor"},
	{ key: 9, value: "Bat-mito"},
	{ key: 10, value: "Spiderman"},
	{ key: 11, value: "Hulk"},
	{ key: 12, value: "Red Hulk"},
	{ key: 13, value: "The Incredible Nightcrawler"},
	{ key: 14, value: "Dr. X."},
	{ key: 15, value: "Rocket Racoon"}
];

window.restService = {
	ajax: function (options) {
		switch(options.url) {
		    case "/SuperHeroes/":
		    	var filteredSuperheroes = [];
		    	for (var i = 0; i < superheroList.length; i++) {
		    		var superhero = superheroList[i];
		    		var searchTextIsIncluded = superhero.value.toLowerCase()
		    			.includes(options.data.search.toLowerCase());
		    		if (searchTextIsIncluded) {
		    			filteredSuperheroes.push(superhero);
		    		}
		    	};
		        options.success(filteredSuperheroes);
		        break;
		    case "/path/to/something":
		        alert("Object posted: " + JSON.stringify(options.data));
		        break;
		    default:
		        break;
		}
	}
};