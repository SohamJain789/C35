class Game{
	constructor(){

	}
	//Read the value of game state from the database 
	getState(){

		var gameStateRef = database.ref('gameState');
		gameStateRef.on("value",function(data){
			gameState = data.val();
		});
	}	
	//write or update a new value to the game state inside the database 
    update(state){
    	database.ref('/').update({
    		gameState:state
    	});
    }
    start(){
    	if(gameState == 0){
    		player = new Player();
    		player.getCount();
    		form = new Form();
    		form.display()
    	}
    }
}

