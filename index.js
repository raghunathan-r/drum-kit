console.log("Lets play some drums");

var soundPath = ["images/tom1.png", "images/tom2.png", "images/tom3.png", "images/tom4.png", "images/snare.png", "images/crash.png", "images/kick.png"]

for( var i = 0; i < document.querySelectorAll(".drum").length ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnnimation(buttonInnerHTML);
    } );
}


document.addEventListener("keypress", function(event) {
    keyPressed = event.key;
    makeSound(keyPressed);
    buttonAnnimation(keyPressed);
})

function makeSound (keyPressed) {
    switch (keyPressed) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play(); 
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play(); 
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play(); 
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play(); 
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play(); 
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play(); 
            break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play(); 
            break;
        default:
            break;
    }   
}

function buttonAnnimation (currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
