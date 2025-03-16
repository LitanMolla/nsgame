// Player One Name Start 
let pOneName = document.querySelector(".pOneName");
let pOneNameHeading = document.querySelector(".pOneNameHeading");
let pOneNameInput = document.querySelector(".pOneNameInput");
let pOneNameSubmit = document.querySelector(".pOneNameSubmit");
let pOneNameWarning = document.querySelector(".pOneNameWarning");
// Player One Name End

// Player One Number Start 
let pOneNumber = document.querySelector(".pOneNumber");
let pOneNumberHeading = document.querySelector(".pOneNumberHeading");
let pOneNumberInput = document.querySelector(".pOneNumberInput");
let pOneNumberSubmit = document.querySelector(".pOneNumberSubmit");
let pOneNumberWarning = document.querySelector(".pOneNumberWarning");
// Player One Number End 

// Player Tow Name Start 
let pTowName = document.querySelector(".pTowName");
let pTowNameHeading = document.querySelector(".pTowNameHeading");
let pTowNameInput = document.querySelector(".pTowNameInput");
let pTowNameSubmit = document.querySelector(".pTowNameSubmit");
let pTowNameWarning = document.querySelector(".pTowNameWarning");
// Player Tow Name End

// Player Tow Number Start 
let pTowNumber = document.querySelector(".pTowNumber");
let pTowNumberHeading = document.querySelector(".pTowNumberHeading");
let pTowNumberInput = document.querySelector(".pTowNumberInput");
let pTowNumberSubmit = document.querySelector(".pTowNumberSubmit");
let pTowNumberWarning = document.querySelector(".pTowNumberWarning");
let chance = document.querySelector(".chance");
let counter = 5;
let gameEnd = document.querySelector(".gameEnd");
let gameEndBox = document.querySelector(".gameEndBox");
// Player Tow Number End 

// ==============================================================
pOneNameSubmit.addEventListener("click", function () {
    let pOneValue = pOneNameInput.value;
    if (pOneValue == "") {
        pOneNameWarning.style.display="block";
    }
    else{
        pOneName.style.display="none";
        pOneNumber.style.display="block";
    }
});
// ================================================================


// ================================================================
pOneNumberSubmit.addEventListener("click", function () {
    let pOneNumValue = pOneNumberInput.value;
    if (pOneNumValue == "") {
        pOneNumberWarning.style.display="block";
        return
    }
    if (pOneNumValue < 1 || pOneNumValue > 20) {
        pOneNumberWarning.style.display="block";
        pOneNumberWarning.innerHTML="Range Error! Please enter a number 1 to 20"
    }
    else{
        if (pOneNumValue - 15) {
            pOneNumber.style.display="none";
            pTowName.style.display="block";
        }
        else{
            pOneNumberWarning.style.display="block";
            pOneNumberWarning.innerHTML="Number Error! Please enter a valid number"
        }
    } 
});
// =========================================================================


// =========================================================================
pTowNameSubmit.addEventListener("click", function () {
    let pTowValue = pTowNameInput.value;
    if (pTowValue == "") {
        pTowNameWarning.style.display="block";
    }
    else{
        pTowName.style.display="none";
        pTowNumber.style.display="block";
    }
});
// =========================================================================

// =========================================================================
pTowNumberSubmit.addEventListener("click", function () {
    let pTowNumValue = pTowNumberInput.value;
    counter--;
    chance.innerHTML="Chance - " + counter;
    if (pTowNumValue == "") {
        pTowNumberWarning.style.display="block";
        return
    }
    if (pTowNumValue < 1 || pTowNumValue > 20) {
        pTowNumberWarning.style.display="block";
        pTowNumberWarning.innerHTML="Range Error! Please enter a number 1 to 20"
    }
    if (counter <= 0) {
        pTowNumber.style.display="none";
        gameEndBox.style.display="block";
        gameEnd.innerHTML="Number not matched <br/> Game Over!"
        return
    }
    if (pTowNumValue == pOneNumberInput.value) {
        pTowNumber.style.display="none";
        gameEndBox.style.display="block";
        gameEnd.innerHTML="Congratulations 🎉 Player 2 Wins!"
    }
    else{
        if (pTowNumValue - 15) {
            
        }
        else{
            pTowNumberWarning.style.display="block";
            pTowNumberWarning.innerHTML="Wrong Input! Please enter a valid number"
        }
    } 
});
// =========================================================================








// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================
// =========================================================================