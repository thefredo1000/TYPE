function startButton() {
	
	document.getElementById("gameScreen").innerHTML = '<input id="inputGame" type="text" value="">'
	
	
	
}
var game = "";
var wordNumber = 0;

var input = document.getElementById("inputGame");
var title = document.getElementById("header");


input.addEventListener("keyup", function(event) {
	
	event.preventDefault();
	
    if (event.keyCode === 13) {
		
		if (input.value == currentWord[wordNumber]) {
			
			wordNumber++;
			
			title.innerHTML = currentWord[wordNumber];
			input.value = "";
			
			setTimeout(function () { close();}, 60000);

			
		} else {
			
			close();
		}
        
    }
	
});

var currentWord = ["TYPE", "WHAT", "EVER", "YOU", "WANT", "IT", "CAN", "BE", "ANY", "SONG", "LYRICS", "MAYBE", "YOU", "LIKE", "LUIS", "MIGUEL", "OR", "kanYe", "West", "BUT", "IF", "YOU", "TYPE", "WRONG", "THEN", "I", "GOT", "BAD", "NEWS", "FOR", "YOU", "ANY", "WAY", "YOU", "CAN", "TYPE", "anything"];

function closeWindow() {
	
	close();
	
}