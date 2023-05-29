numberOfDrums = document.querySelectorAll("button").length

for (var i = 0; i < numberOfDrums ; i++){
    document.querySelectorAll("button")[i].addEventListener("click",drumSound)
}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animateButton(event.key);
})

function drumSound() {
    var buttonPressed = this.innerHTML ;
    makeSound(buttonPressed);
    animateButton(buttonPressed);
}

function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            setTimeout(function (){
                document.querySelector("." + key).classList.toggle("pressed")
            },300)
            break;

        case "a":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            setTimeout(function (){
                document.querySelector("." + key).classList.toggle("pressed")
            },300)
            break;

        case "s":
            var snare = new Audio("sounds/snare.mp3")
            snare.play();
            setTimeout(function (){
                document.querySelector("." + key).classList.toggle("pressed")
            },300)
            break;
            
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3")
            tom1.play();
            setTimeout(function (){
                document.querySelector("." + key).classList.toggle("pressed")
            },300)
            break;

        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            setTimeout(function (){
                document.querySelector("." + key).classList.toggle("pressed")
            },300)
            break;

        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            setTimeout(function (){
                document.querySelector("." + key).classList.toggle("pressed")
            },300)
            break;
        
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            setTimeout(function (){
                document.querySelector("." + key).classList.toggle("pressed")
            },300)
            break;
    
        default: console.log(key)
            break;
    }
}

function animateButton(key){
    var activeButton = document.querySelector("." + key).classList.toggle("pressed")
    console.log(document.querySelector("." + key).classList)
}