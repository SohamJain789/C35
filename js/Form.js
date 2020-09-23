class Form{
 constructor(){
 
 }
 //Dispkay the form 
 display(){
 //Create title of the page in h2 size and position it
 var title = createElement('h2');
 title.html("Car racing game");
 title.position(130,0);
 //	Create a text box to take the player name,button and greeting in h3 size and position them
 var input = createInput("name")
 var button = createButton("play")
 var greeting = createElement('h3')
 input.position(130,160);
 button.position(250,200);
 //Call a function when the button is pressed with the mouse 
 button.mousePressed(function(){
 	input.hide();
 	button.hide();
 	// value == gets the value of player name from the text box 
 	var name = input.value();
 	// When ach playerregisters his name increase the player count by one
 	playerCount = playerCount + 1
 	//Call the functions  to update name,player count in the database
 	player.update(name);
 	player.updateCount(playerCount);
 	//Display the greeting and position it 
 	greeting.html("hello" + name);
 	greeting.position(350,200)		
 })
 }
}