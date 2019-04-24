// UI ELEMENT
const  form     = document.querySelector("form"),
       message  = document.querySelector(".message"),
       input    = document.querySelector("input"),
       guessbtn = document.querySelector(".guessbtn"),
       body     = document.querySelector("body")

// VARIABLES NEEDED
let winNum = randomNum(),
    remainGuess = 3


// FORM EVENTS
form.addEventListener("submit", ((e) => {
    e.preventDefault()
    const inputText = Number(e.target.elements.inputText.value)

    if (inputText >= 10 || inputText <= 0) {
        messages("Please Enter a number between 0 and 10.", "tomato")
        e.target.elements.inputText.value = "";
    }
    else if (inputText !== winNum) {
        remainGuess --;
        messages("Your Guess is incorrect. You have "+ remainGuess +" guesses left", "tomato" )
        setTimeout(() => {
            e.target.elements.inputText.value = "";
        }, 500);
        
        if (remainGuess === 0) {
            loseFunc()
        }
    } else {
        winFunc()
    }
}))


// PLAY AGAIN FUNCTION
guessbtn.addEventListener("mousedown", ()=>{
    if (guessbtn.classList.contains("play-again")) {
        window.location.reload()
    }
})

// MESSAGE FUNCTION
function messages(msg, color) {
    message.textContent = msg 
    message.style.color = color

    setTimeout(() => {
        message.textContent ="";
    }, 2000);
    
}
//LOSE FUNCTION
function loseFunc() {
    message.innerText = "Game Over. You Loss. The Correct answer was " + winNum;
    guessbtn.textContent = "Play again"
    guessbtn.classList = "play-again btn btn-info"
    input.disabled = true;
    body.style.backgroundColor = "black"
}

// WIN FUNCTION
function winFunc() {
    message.textContent = "You win the correct answer is " + winNum
    message.style.color = "white"
    guessbtn.textContent = "Play again"
    guessbtn.classList = "play-again btn btn-success"
    input.disabled = true
    body.style.backgroundColor = "green"
}


// RANDOM NUMBER PICKER FUNCTION
function randomNum() {
    const random = Math.floor(Math.random()* 9 + 1 )
    console.log(random);
    return random
}

  //GUESS A NUMBER BETWEEN 0 AND 10. NOTE THAT 0 AND 10 ARE EXCLUSIVE
  // YOU HAVE 3 GUESSES TO ATTEMPT
  // IF YOU GUESS THE NUMBER CORRECTLY WITHIN THE GUESS RANGE 
    //THE BACKGROUND COLOR WILL CHANGE TO GREEN AND YOUR SEE A VICTORY MESSAGE POPS UP
  // AND IF YOU GUESS INCORRECT NUMBER AND YOU STILL HAVE GUESS LEFT YOU CAN CONTINUE GUESSING UNTIL YOU'VE EXHAUST ALL GUESSES
  // THEN THE GAME WILL BE OVER AND YOU WILL NOT BE ABLE TO GUESS AGAIN 
  // THEN YOU CAN RESTART THE GAME
