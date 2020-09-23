 class Player {
 	constructor(){

 	}
 	//Gets the no of players that have joined the game from the database
 getCount(){

		var playerCountRef = database.ref('playerCount');
		playerCountRef.on("value",function(data){
			playerCount = data.val();
		});
	}	
	//write or update a new value to the player count inside the database 
    updateCount(count){
    	database.ref('/').update({
    		playerCount:count
    	});
    }

    update(name){
    	var playerIndex = "player" + playerCount
    	database.ref(playerIndex).set({
    		name:name
    	})
    }
 }