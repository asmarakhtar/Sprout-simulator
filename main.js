
// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let EndBtnEl = document.getElementById("endday");
let plantfoodBtnEl = document.getElementById("plantfood");
let pesticideBtnEl = document.getElementById("pesticide");
let menuEl = document.getElementById("menu");
let ResetBtnEl= document.getElementById("reset");
let infoBtnEl= document.getElementById("info");
let checkBtnEl= document.getElementById("check");
// Global Variable
let sprouts = [10]
let maxSprouts = 100; // sprout values should be b/t 0 and max
function GradeRandom(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
}


// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < sprouts.length; i++) {
    divHeight = (sprouts[i] / maxSprouts) * 600; // Scale grades to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Button functions
EndBtnEl.addEventListener("click", Endday);
plantfoodBtnEl.addEventListener("click", plantfood);
pesticideBtnEl.addEventListener("click", pesticide);
ResetBtnEl.addEventListener("click", reset);
infoBtnEl.addEventListener("click", mainMenu);
checkBtnEl.addEventListener("click", check);
function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "enddayoption") {
    outputEl.innerHTML = "This button stimulates a growth cycle overnight, although plants need food to sustain growth!";
  } else if (selection === "plantfoodoption") {
    outputEl.innerHTML = "Plant food is great at helping your plants grow although too much plant food can bring insects";
  } else if (selection === "pesticideoption") {
    outputEl.innerHTML = "Pesticides are good on strong plants but they will have negative sideffects on weaker plants";
  } else if (selection === "resetoption") {
    outputEl.innerHTML = "Plants a new seed";
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function  Endday() {
  //End day and stimulate small growth
  for (let i = 0; i < sprouts.length; i++) {
     
    if (sprouts [i] == 0) {
      sprouts[0]= 0;
      outputEl.innerHTML = "There are no plants to grow";
     }
    else if (sprouts [i] <= 40) {
    sprouts[0] += 3;
    outputEl.innerHTML = "Your sprout grew overnight!"
         
      } else if (sprouts [i] >= 40) {
        sprouts[0] -=1
        outputEl.innerHTML = "Your sprouts need food!";
    }
  }
  drawArray();
}
         
    
   function plantfood () {
    for (let i = 0; i < sprouts.length; i++) {
      //Feed plant food and stimulate large growth at a cost
     if (sprouts [i] == 0) {
      sprouts[0]= 0;
      outputEl.innerHTML = "There are no plants to feed";
     }
      else if (sprouts [i] <= 60) {
        sprouts[0]+=10;
      outputEl.innerHTML = "The plant food had a great effect";
      }
    else if (sprouts [i] >= 60) {
      sprouts[0] =0;
      outputEl.innerHTML = "The plant food attracted bugs!";
   }
   drawArray();
  }
}



  function pesticide () {
    //Stimulate situational growth.
    for (let i = 0; i < sprouts.length; i++) {
     if (sprouts[i] == 0) {
      outputEl.innerHTML = "There are no plants to spray";
    }
      else if (sprouts [i] < 60) {
        sprouts[0] =0;
      outputEl.innerHTML = "The pesticides killed the plants!";
  } else if (sprouts [i] > 60) {
    sprouts [0] += 3;
    outputEl.innerHTML = "The pesticides killed the insects!"

}
  
  drawArray();
}
  } 

function reset () {
  //Restart simulator
  for (let i = 0; i < sprouts.length; i++) {
    sprouts [0] = 1
  outputEl.innerHTML = "A new seed has been planted!"
}
drawArray();
}

function check () {
  for (let i = 0; i < sprouts.length; i++) {
    if (sprouts[i] == 100) {
     outputEl.innerHTML = "You did it!";
   } else if (sprouts [i] > 100) {
    outputEl.innerHTML = "You overshot!";
   } else if (sprouts [i] < 100) {
    outputEl.innerHTML = "You still can grow taller!";
   }

}
}




