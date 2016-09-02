var PokeSocialApp = function(){
	this.pokeTable = null;
}

PokeSocialApp.prototype.init = function(){
	this.createMap();
	this.createTable();
}

PokeSocialApp.prototype.createMap = function(){

};

PokeSocialApp.prototype.createTable = function(){
	this.pokeTable = new PokeTable();
	this.pokeTable.init();
};
