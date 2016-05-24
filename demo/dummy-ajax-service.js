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

var superVillans = [
	{ name: "Tweedledum and Tweedledee" },
	{ name: "Joker" },
	{ name: "Bane" },
	{ name: "Killer Croc" },
	{ name: "The Riddler" },
	{ name: "Dr. Strange" },
	{ name: "Penguin" },
	{ name: "Two Faces" },
	{ name: "Mr Freeze" },
	{ name: "Harley Queen" },
	{ name: "Deadshot" },
	{ name: "Solomon Grundy" },
	{ name: "Deathstroke" },
	{ name: "Manbat" },
	{ name: "Poison Ivy" },
	{ name: "Scarecrow" },
	{ name: "Black Mask" },	
];

var ValidationError = function (field, message) {
	this.field = field;
	this.message = message;
};

var ValidationResult = function (isValid) {
	this.isValid = isValid;
	this.errors = [];
};

window.restService = {
	ajax: function (options) {
		switch(options.url) {
		    case "/SuperHeroes/":
		    	var filteredSuperheroes = [];
		    	for (var i = 0; i < superheroList.length; i++) {
		    		var superhero = superheroList[i];
		    		var searchTextIsIncluded = superhero.value.toLowerCase()
		    			.indexOf(options.data.search.toLowerCase()) > - 1;
		    		if (searchTextIsIncluded) {
		    			filteredSuperheroes.push(superhero);
		    		}
		    	};
		        options.success(filteredSuperheroes);
		        break;
		    case "/path/to/something":
		        alert("Object posted: " + JSON.stringify(options.data));
		        var validationResult;
		        if (options.data.favoriteSuperHero !== "Batman") {
		        	validationResult = {
		        		isValid: false,
		        		errors: [ new ValidationError("favoriteSuperHero", "The server requires that your favorite superhero must be Batman.")]
		        	}
		        } else {
					validationResult = {
		        		isValid: true
		        	}
		        }
		        var result = { resultId: 666, validationResult: validationResult };
		        options.success(result);
		        break;
		    case "/initial/data/from/here":
		        var result = { denomination: "Initial Value From Server" };
		        options.success(result);
		    	break;
		    case "/SuperVillans/":
		    	var searchText = options.data.searchText.toLowerCase();
		    	var elementsPerPage = Number(options.data.elementsPerPage);
		    	var page = Number(options.data.page);
		    	console.log("fetching super villains with search text " + (searchText || "empty") + ", elements per pafe " + elementsPerPage + " and page " + page);
		    	var filteredCollection = _.filter(superVillans, function(item) { 
		    		return item.name.toLowerCase().indexOf(searchText) > -1;
		    	});
		    	var start = elementsPerPage * (page - 1);
		    	var end = (elementsPerPage * page);
		    	var collection = filteredCollection.slice(start, end);
		    	var result = {
		    		numberOfResults: collection.length,
		    		collection: collection
		    	};
		    	options.success(result);
		    default:
		        break;
		}
	}
};