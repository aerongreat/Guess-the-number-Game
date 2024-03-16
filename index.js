//NUMBER GUESSING GAME
const myInput = document.getElementById("myInput");
const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");

const minNum = 1;
const maxNum = 100;
const answer =Math.floor( Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess;

myBtn.onclick= function(){
  guess = parseInt(myInput.value);
  if(isNaN(guess) || guess < minNum || guess > maxNum){
    result.innerHTML="Please enter a valid number";
  
  } 
  else{
    attempts++;
    if(guess < answer){
      result.innerHTML="Too low, try again";
    }
    else if(guess > answer) {
      result.innerHTML="Too high, try again";
    }
    else{  
      result.innerHTML=`Correct! The answer was ${answer}. It took you just ${attempts} to guess the right answer!`;
      myInput.disabled = true;
      myBtn.disabled = true;
    }
  } 
}