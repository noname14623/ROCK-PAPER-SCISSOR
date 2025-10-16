//getting html elements 
let container = document.querySelector(".container");
let weaponbox = container.querySelector(".weapon-box");
let playerchoicesbox = container.querySelector(".player-choices");
let weapons = weaponbox.querySelectorAll(".weapons div");
let player = playerchoicesbox.querySelector(".player-choice img");
let computer = playerchoicesbox.querySelector(".computer-choice img")
let resultbox = container.querySelector(".result-box");
let wonvaluetxt = document.querySelector(".score-box .won h3 span");
let lostvaluetxt = document.querySelector(".score-box .lost h3 span");
let drawvaluetxt = document.querySelector(".score-box .draw h3 span");
let resulttxt = resultbox.querySelector("h3");
let playagainbtn = resultbox.querySelector("button");

let won = 0, lost = 0 , draw =0;
let computerchoices = ["rock", "paper", "scissors"];

let outcomes = {
  rockrock: "Draw",
  rockpaper: "Computer",
  rockscissors: "You",
  paperpaper: "Draw",
  paperrock: "You",
  paperscissors: "Computer",
  scissorsscissors: "Draw",
  scissorsrock: "Computer",
  scissorspaper: "You"
};


// add event listener to the weapon choice
for(let i = 0 ; i < weapons.length; i++){
    weapons[i].addEventListener("click" , (e) => {
      player.src = "Rock.png";
      computer.src = "Rock.png";
        // console.log(e.target);
        // hide the weapon box  and show the player choices
        // console.log(e.target)
        weaponbox.style.display = "none";
        playerchoicesbox.style.display = "block";
        
        //add a delay before showing the player choices
       setTimeout(() => {
        playerchoicesbox.classList.add('active');
       },1000);

       setTimeout(() => {
        //pause the animation of revealing hands after 3 seconds
        let playerchoices = playerchoicesbox.querySelectorAll("div");
        for ( let i = 0; i < playerchoices.length; i++){
          playerchoices[i].style.animationPlayState = "paused";
        }
        // set the player choice to the selected weapon
        player.src = e.target.src;
        
        
        //generate a random computer choice
      let randomchoice = computerchoices[Math.floor(Math.random() * computerchoices.length)];
      computer.src = randomchoice.charAt(0).toUpperCase() + randomchoice.slice(1) + ".png";

      let userchoice = e.target.parentElement.className.toLowerCase();
      let outcomevalue = outcomes[userchoice + randomchoice];
       // show result 
        showresult(outcomevalue);
       },3000 );
     })
}

//function to show the result of the game
let showresult = (result) => {
  // console.log(result);
  container.style.height = "415px";
  resultbox.style.display = "block"

  if(result === "You"){
    resulttxt.innerHTML = "Congrats , You Won! &#x1f389;"; 
    won++;
    wonvaluetxt.innerHTML = won;
  }else if(result === "Computer"){
    resulttxt.innerHTML = "You Lost!";
    lost++;
      lostvaluetxt.innerHTML = lost;
  }else{
    resulttxt.innerHTML = "Match Draw!";
    draw++
      drawvaluetxt.innerHTML = draw;
  }
}

playagainbtn.addEventListener("click" , () =>{
  playerchoicesbox.classList.remove('active');
  container.style.height = "380px";
  resultbox.style.display = "none";
  weaponbox.style.display = "block";
    playerchoicesbox.style.display = "none";

    let playerchoices = playerchoicesbox.querySelectorAll("div");
    for ( let i = 0; i < playerchoices.length; i++){
    playerchoices[i].style.animationPlayState = "paused";
        }
})