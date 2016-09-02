var PokeTable = function(){
	this.data = null;
	this.modalTemplate = null;
}

PokeTable.prototype.init = function(){
	this.loadData(this.loadDataSuccess.bind(this));
};

PokeTable.prototype.loadData = function(callback){
	$.getJSON("data/data.json", function(data) {
		callback(data);
	});
};

PokeTable.prototype.loadDataSuccess = function(data){
	this.data = data;
	this.loadTemplate(this.createTemplate.bind(this));
};

PokeTable.prototype.loadTemplate = function(callback){
	$.get( "template/poketable.html", function( html ) {
	  callback(html);
	});
};

PokeTable.prototype.createTemplate = function(html){
	var template = _.template(html);
	var compiled = template({data: this.data});
	$("#pokeTable").append(compiled);

	this.createEventListener();
};

PokeTable.prototype.createEventListener = function(html){
	$(".detailsBtn").click(function(e){
		var pokeId = $(e.target).attr("data-pokeid");
		this.launchModal(pokeId, this.createModal.bind(this));
	}.bind(this));
};

PokeTable.prototype.launchModal = function(pokeId, callback){
	var pokemon = this.getPokemonById(pokeId);

	$.get( "template/pokemondetails.html", function( html ) {
	  callback(html, pokemon);
	});
};

PokeTable.prototype.createModal = function(html, pokemon){
	if(this.modalTemplate)
	{
		$('.modal').remove();
	}

	var template = _.template(html);
	this.modalTemplate = template({pokemon: pokemon});
	$("#pokeModal").append(this.modalTemplate);
	$('.modal').modal();
};

PokeTable.prototype.getPokemonById = function(pokeId){
	return _.find(this.data, function(pokemon){
		return pokemon.Number === pokeId;
	});
};
