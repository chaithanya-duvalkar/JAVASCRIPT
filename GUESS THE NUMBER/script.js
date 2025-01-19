//GUESS MY NUMBER....!

'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🎉 Correct Number!';

document.querySelector('.number').textContent=18;
document.querySelector('.score').textContent=9;

document.querySelector('.guess').value=27;
console.log(document.querySelector('.guess').value);
*/


//display secret number by generating random number

let secretNumber=Math.trunc(Math.random()*20)+1;  //generates no. between 0 to 20
let score=20;
let highscore=0;


//inorder to reduce the repeated use of the statements

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
}


//display number while clicking the check button

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess,typeof guess);     //gives typed number and the typeof i.e, number

    //when there is no input
    if(!guess){
       // document.querySelector('.message').textContent='⛔ No number!';  //if no number is typed in the box
       displayMessage('⛔ No number!');
    }

    //when the player wins
    else if(guess===secretNumber){
      //document.querySelector('.message').textContent='🎉 Correct Number!'; 
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';    //the screen turns green when player wins the game
        document.querySelector('.number').style.width='30rem';

        //to restore the hightscore in a new game
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }

    //when the player guess the wrong number
    else if(guess!==secretNumber){
        if(score>1){
         //   document.querySelector('.message').textContent=
         //   guess>secretNumber?'📈 Too high!':'📉 Too low!';    //using ternary operator instead of more loops
            displayMessage(guess>secretNumber?'📈 Too high!':'📉 Too low!');
            score--;
            document.querySelector('.score').textContent=score;   
        }
        else{
           // document.querySelector('.message').textContent='💥 You lost the game!';
             displayMessage('💥 You lost the game!');
             document.querySelector('.score').textContent=0;  
        } 
    }

    //other lengthy method
/*
    //when guess is too high
    else if(guess>secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='📈 Too high!';
            score--;
            document.querySelector('.score').textContent=score;   
        }
        else{
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent=0;  
        }  
    }

    //when guess is too low
    else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='📉 Too low!';
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='💥 You lost the game!';
            document.querySelector('.score').textContent=0;  
        } 
    }
        */
});


//to display new game when again button is clicked

    document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;
   //document.querySelector('.message').textContent='Start Guessing...!';
    displayMessage('Start Guessing...!');
    document.querySelector('.score').textContent=score;
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='#222';    //the screen turns green when player wins the game
    document.querySelector('.number').style.width='15rem';

});
