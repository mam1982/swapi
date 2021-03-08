var filmsFields = [
	{ name: "title", type: "text", width: 150, title: 'Title' },
	{ name: "title", width: 50, sorting: false, title: 'Open', itemTemplate: function(value, item) { return getInfoTemplate(value, item.url, filmsFields)} },
	{ name: "episode_id", type: "number", width: 150, title: 'Episode Number' },
	{ name: "director", type: "text", width: 150, title: 'Director' },
	{ name: "producer", type: "text", width: 150, title: 'Producer' },
	{ name: "release_date", type: "text", width: 150, title: 'Release Date' },
	{ name: "characters", title: 'Characters', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, charactersFields, 'Characters of "' + item.title + '"', "characters"); } },
	{ name: "opening_crawl", width: 150, title: 'Opening Crawl', sorting: false, itemTemplate: function(value, item) { return getCrawlDialogTemplate(value)} },
	{ name: "planets", title: 'Planets', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, planetsFields, 'Planets of "' + item.title + '"', "planets"); } },
	{ name: "species", title: 'Species', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, speciesFields, 'Species of "' + item.title + '"', "species"); } },
	{ name: "starships", title: 'Starships', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, starshipsFields, 'Starships of "' + item.title + '"', "starships"); } },
	{ name: "vehicles", title: 'Vehicles', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, vehiclesFields, 'Vehicles of "' + item.title + '"', "vehicles"); } }
];

var charactersFields = [
	{ name: "name", type: "text", width: 150, title: 'Name' },
	{ name: "name", width: 50, sorting: false, title: 'Open', itemTemplate: function(value, item) { return getInfoTemplate(value, item.url, charactersFields)} },
	{ name: "homeworld", type: "text", width: 150, title: 'Homeworld', sorting: false, itemTemplate: function(value, item) { return getInfoTemplate(value, item.homeworld, planetsFields, "name")} },
	{ name: "gender", type: "text", width: 150, title: 'Gender' },
	{ name: "birth_year", type: "text", width: 150, title: 'Birth Year' },
	{ name: "height", type: "number", width: 150, title: 'Height' },
	{ name: "mass", type: "number", width: 150, title: 'Mass' },
	{ name: "skin_color", type: "text", width: 150, title: 'Skin Color' },
	{ name: "eye_color", type: "text", width: 150, title: 'Eye Color' },
	{ name: "hair_color", type: "text", width: 150, title: 'Hair Color' },
	{ name: "films", title: 'Films', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, filmsFields, 'Films of "' + item.name + '"', "films"); } },
	{ name: "species", title: 'Species', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, speciesFields, 'Species of "' + item.name + '"', "species"); } },
	{ name: "starships", title: 'Starships', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, starshipsFields, 'Starships of "' + item.name + '"', "starships"); } },
	{ name: "vehicles", title: 'Vehicles', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, vehiclesFields, 'Vehicles of "' + item.name + '"', "vehicles"); } }
];

var planetsFields = [
	{ name: "name", type: "text", width: 150, title: 'Name' },
	{ name: "name", width: 50, sorting: false, title: 'Open', itemTemplate: function(value, item) { return getInfoTemplate(value, item.url, planetsFields)} },
	{ name: "climate", type: "text", width: 150, title: 'Climate' },
	{ name: "diameter", type: "number", width: 150, title: 'Diameter' },
	{ name: "gravity", type: "text", width: 150, title: 'Gravity' },
	{ name: "orbital_period", type: "number", width: 150, title: 'Orbital Period' },
	{ name: "population", type: "number", width: 150, title: 'Population' },
	{ name: "rotation_period", type: "number", width: 150, title: 'Rotation Period' },
	{ name: "surface_water", type: "number", width: 150, title: 'Surface Water' },
	{ name: "terrain", type: "text", width: 150, title: 'Terrain' },
	{ name: "films", title: 'Films', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, filmsFields, 'Films of "' + item.name + '"', "films"); } },
	{ name: "residents", title: 'Residents', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, charactersFields, 'Residents of "' + item.name + '"', "characters"); } }
];

var speciesFields = [
	{ name: "name", type: "text", width: 150, title: 'Name' },
	{ name: "name", width: 50, sorting: false, title: 'Open', itemTemplate: function(value, item) { return getInfoTemplate(value, item.url, speciesFields)} },
	{ name: "homeworld", type: "text", width: 150, title: 'Homeworld', sorting: false, itemTemplate: function(value, item) { return getInfoTemplate(value, item.homeworld, planetsFields, "name")} },
	{ name: "classification", type: "text", width: 150, title: 'Classification' },
	{ name: "designation", type: "text", width: 150, title: 'Designation' },
	{ name: "language", type: "text", width: 150, title: 'Language' },
	{ name: "average_height", type: "number", width: 150, title: 'Average Height' },
	{ name: "average_lifespan", type: "number", width: 150, title: 'Average Lifespan' },
	{ name: "eye_colors", type: "text", width: 150, title: 'Eye Colors' },
	{ name: "hair_colors", type: "text", width: 150, title: 'Hair Colors' },
	{ name: "skin_colors", type: "text", width: 150, title: 'Skin Colors' },
	{ name: "films", title: 'Films', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, filmsFields, 'Films of "' + item.name + '"', "films"); } },
	{ name: "people", title: 'People', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, charactersFields, 'People of "' + item.name + '"', "characters"); } }
];

var starshipsFields = [
	{ name: "name", type: "text", width: 150, title: 'Name' },
	{ name: "name", width: 50, sorting: false, title: 'Open', itemTemplate: function(value, item) { return getInfoTemplate(value, item.url, starshipsFields)} },
	{ name: "model", type: "text", width: 150, title: 'Model' },
	{ name: "manufacturer", type: "text", width: 150, title: 'Manufacturer' },
	{ name: "starship_class", type: "text", width: 150, title: 'Starship Class' },
	{ name: "passengers", type: "number", width: 150, title: 'Passengers' },
	{ name: "crew", type: "number", width: 150, title: 'Crew' },
	{ name: "MGLT", type: "number", width: 150, title: 'MGLT' },
	{ name: "cargo_capacity", type: "number", width: 150, title: 'Cargo Capacity' },
	{ name: "consumables", type: "text", width: 150, title: 'Consumables' },
	{ name: "cost_in_credits", type: "number", width: 150, title: 'Cost in Credits' },
	{ name: "hyperdrive_rating", type: "number", width: 200, title: 'Hyperdrive Rating' },
	{ name: "length", type: "number", width: 150, title: 'Length' },
	{ name: "max_atmosphering_speed", type: "number", width: 220, title: 'Max Atmosphering Speed' },
	{ name: "films", title: 'Films', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, filmsFields, 'Films of "' + item.name + '"', "films"); } },
	{ name: "pilots", title: 'Pilots', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, charactersFields, 'Pilots of "' + item.name + '"', "characters"); } }
];

var vehiclesFields = [
	{ name: "name", type: "text", width: 150, title: 'Name' },
	{ name: "name", width: 50, sorting: false, title: 'Open', itemTemplate: function(value, item) { return getInfoTemplate(value, item.url, vehiclesFields)} },
	{ name: "model", type: "text", width: 150, title: 'Model' },
	{ name: "manufacturer", type: "text", width: 150, title: 'Manufacturer' },
	{ name: "vehicle_class", type: "text", width: 150, title: 'Vehicle Class' },
	{ name: "passengers", type: "number", width: 150, title: 'Passengers' },
	{ name: "crew", type: "number", width: 150, title: 'Crew' },
	{ name: "cargo_capacity", type: "number", width: 150, title: 'Cargo Capacity' },
	{ name: "consumables", type: "text", width: 150, title: 'Consumables' },
	{ name: "cost_in_credits", type: "number", width: 150, title: 'Cost in Credits' },
	{ name: "length", type: "number", width: 150, title: 'Length' },
	{ name: "max_atmosphering_speed", type: "number", width: 220, title: 'Max Atmosphering Speed' },
	{ name: "films", title: 'Films', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, filmsFields, 'Films of "' + item.name + '"', "films"); } },
	{ name: "pilots", title: 'Pilots', sorting: false, itemTemplate: function(value, item) { return getDialogTemplate(value, charactersFields, 'Pilots of "' + item.name + '"', "characters"); } }
];

var gridResources = {};
var mainGrid = $('.main_grid');
var main = $('.main');
var jsGridContainer = $("#jsGrid");

// open a grid with the result of the array of urls in a dialog
function openGridDialog(values, fields, title) {
	var dialog = jQuery('<div style="width=500px"><div id="grid_dialog"></div></div>');
	mainGrid.append(dialog);
	var promises = [];
	var result = [];
	values.forEach(function(v){
		var defer = $.Deferred();
		promises.push(defer.promise());
		$.ajax({
            url: v,
            dataType: "json"
        }).done(function(response) {
			result.push(response);
            defer.resolve();
        });
	});
	Promise.all(promises).then(function(){
		$("#grid_dialog").jsGrid({
			width: "100%",
			height: "400px",
			sorting: true,
			paging: true,
			data: result,
			fields: fields
		});
		dialog.dialog({ width: 500, title: title, close: function() { dialog.remove(); } });
	});
}

function getDialogTemplate(value, fields, title, cssClass) {
	if (value.length) {
		var element = jQuery('<div/>', {
			click: function(){
				openGridDialog(value, fields, title);
			}
		});
		element.addClass("grid_icon " + cssClass);
		return element;
	}
}

function createInfoPanel(element, item, fields) {
	// show the info as a table
	var table = $('<table></table>');
	fields.forEach(function(field) {
		if (field.title !== 'Open') {
			var tr = $('<tr></tr>');
			tr.append('<td><div>' + field.title + '</div></td>');
			// if is an array of urls or an url to another resource add the icon to open other dialog
			if ($.isArray(item[field.name]) || (typeof item[field.name] === 'string' && item[field.name].startsWith('http'))) {
				var td = $('<td></td>');
				td.append(field.itemTemplate(item[field.name], item));
				tr.append(td);
			}
			else {
				tr.append('<td><div>' + item[field.name] + '</div></td>');
			}
			table.append(tr);
		}
	});
	element.append(table);
}

function openInfoDialog(value, url, fields, relatedField) {
	var dialog = jQuery('<div style="width=500px"><div id="info_dialog"></div></div>');
	mainGrid.append(dialog);
	$.ajax({
		url: url,
		dataType: "json"
	}).done(function(response) {
		createInfoPanel($('#info_dialog'), response, fields);
		var title = relatedField ? response[relatedField] : value;
		dialog.dialog({ width: 500, title: title, dialogClass: "info_dialog", close: function() { dialog.remove(); } });
	});	
}

function getInfoTemplate(value, url, fields, relatedField) {
	var element = jQuery('<div/>', {
		click: function(){
			openInfoDialog(value, url, fields, relatedField);
		}
	});
	relatedField ? element.append('<div class="grid_icon planets"></div>') : element.append('<div class="grid_icon info"></div>');
	return element;
}

var size;
var posY; 
var ang;
var delta;
var scaleDelta;
var speed;

// opening crawl animation
function scale(){
	size = size - scaleDelta;
	posY = posY -delta;
	if(posY<80){
		delta = 0.4;
		scaleDelta = 0.006; 
	}
	if(posY<40){
		delta = 0.2;			 	
		scaleDelta = 0.003; 
	}
	if(posY<20){
		delta = 0.1;			 	
		scaleDelta = 0.001; 
	}
	$(".starwars-intro").css({'top' : posY + "%","transform" : "rotateX(" + ang + "deg) scale(" + size + ")"})

	if(posY> -30){
		setTimeout(scale,speed);	
	}else{
		$(".starwars-intro").animate({opacity:"0"},500);
	}	
}

// show opening crawl
function openCrawlDialog(value) {
	mainGrid.hide();
	$('body').append('<div class="opening_crawl_container"><div class="starwars-page"><div class="starwars-intro"><p>' + value + '</p></div></div></div>');
	var button = $('<button></button>');
	// back to main page
	button.click(function(){
		$('.opening_crawl_container').remove();
		posY = -30;
		mainGrid.show();
	});
	$('.opening_crawl_container').prepend(button);
	size = 3;
	posY = 230; 
	ang = 60;
	delta = 1;
	scaleDelta = 0.008;
	speed = 50;
	scale();
}

function getCrawlDialogTemplate(value) {
	var element = jQuery('<div/>', {
		click: function(){
			openCrawlDialog(value);
		}
	});
	element.addClass("grid_icon opening_crawl");
	return element;
}

// open grids
$('.resource').click(function(ev){
	main.hide();
	mainGrid.show();
	var section = ev.target.getAttribute('id');
	mainGrid.find('.main_grid_title > label').html(gridResources[section].title);
	mainGrid.find('.main_grid_title > input').attr('placeholder', gridResources[section].searchPlaceHolder);
	jsGridContainer.jsGrid({
        width: "100%",
        height: "400px",
        sorting: true,
        paging: false,
        controller: {
            loadData: function(filter) {
                var d = $.Deferred();
				var url = gridResources[section].url + (filter.filter && filter.filter.length ? '?search=' + filter.filter : '');
				$.ajax({
                    url: url,
                    dataType: "json"
                }).done(function(response) {
                    d.resolve(response.results);
                });
                return d.promise();
            }
        },
        fields: gridResources[section].fields
    });
	jsGridContainer.jsGrid("loadData").done(function(){
		// default sorting of the grid
		jsGridContainer.jsGrid("sort", { field: gridResources[section].defaultSortField, order: gridResources[section].defaultSortOrder });
	});
});

// back to main page
mainGrid.find('.main_grid_title > button.back').click(function(){
	mainGrid.hide();
	main.show();
	jsGridContainer.jsGrid('destroy');
});

// search
mainGrid.find('.main_grid_title > button.search').click(function(){
	var filter = $('.main_grid_title > input').val();
	jsGridContainer.jsGrid('loadData', { filter: filter });
});

mainGrid.hide();

$.ajax({
	url: 'https://swapi.dev/api/',
    dataType: "json"
}).done(function(response) {
	gridResources.films = { url: response.films, fields: filmsFields, title: 'Films', defaultSortField: 'title', defaultSortOrder: 'asc', searchPlaceHolder: 'Find by Title' };
	gridResources.people = { url: response.people, fields: charactersFields, title: 'People', defaultSortField: 'name', defaultSortOrder: 'asc', searchPlaceHolder: 'Find by Name' };
	gridResources.planets = { url: response.planets, fields: planetsFields, title: 'Planets', defaultSortField: 'name', defaultSortOrder: 'asc', searchPlaceHolder: 'Find by Name' };
	gridResources.species = { url: response.species, fields: speciesFields, title: 'Species', defaultSortField: 'name', defaultSortOrder: 'asc', searchPlaceHolder: 'Find by Name' };
	gridResources.starships = { url: response.starships, fields: starshipsFields, title: 'Starships', defaultSortField: 'name', defaultSortOrder: 'asc', searchPlaceHolder: 'Find by Name and Model' };
	gridResources.vehicles = { url: response.vehicles, fields: vehiclesFields, title: 'Vehicles', defaultSortField: 'name', defaultSortOrder: 'asc', searchPlaceHolder: 'Find by Name and Model' };
});