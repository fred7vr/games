
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
     
    var buttonHTML = this.innerHTML;

    makesound (buttonHTML);
    buttonAnimation (buttonHTML);
            
     })}


document.addEventListener("keydown", function(event){
    makesound (event.key);
    buttonAnimation(event.key);

})



    function makesound (key) {
    
    switch (key) {
        case "w": 
            var audio = new Audio ("sounds/crash.mp3");
            audio.play();
        break;
        case "a": 
            var audio = new Audio ("sounds/kick-bass.mp3");
            audio.play();
        break;
        case "s": 
            var audio = new Audio ("sounds/snare.mp3");
            audio.play();
        break;
        case "d": 
            var audio = new Audio ("sounds/hat.wav");
            audio.play();
        break;
        case "j": 
            var audio = new Audio ("sounds/tom-1.mp3");
            audio.play();
        break;
        case "k": 
            var audio = new Audio ("sounds/tom-2.mp3");
            audio.play();
        break;
        case "l": 
            var audio = new Audio ("sounds/tom-3.mp3");
            audio.play();
        break;
        default: console.log(buttonHTML.innerHTML);

}}


function buttonAnimation(currentKey) {
    var activeButton = document.querySelector ("." +currentKey);
    activeButton.classList.add("pressed");

    setTimeout (function() {
        activeButton.classList.remove("pressed")
    } , 100);

}

// function handleClick() {
//     alert("I got clicked!");
// 



//constructor function//

// function housekeeper (yearsOfExperience, name, cleaningRepertoire) {
//     this.yearsOfExperience = yearsOfExperience;
//     this.name = name;
//     this.cleaningRepertoire = cleaningRepertoire;
        // this.movesuitcase = function (){
        //     alert ("May I move your suitcase?");
        //     movesuitcase();
        //     move();
        // }

// }

// var housekeeper1 = new housekeeper (12, "Tom", ["lobby", "toilet"]);
// console.log(this.innerHTML);

// switch (expression) {
//     case expression:
//     break;
//     default:
        
//  }