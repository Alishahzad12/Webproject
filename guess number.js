// ................step1    creating the random number
let Secretnumber=Math.trunc(Math.random()*20)+1;
console.log(Secretnumber);
// ................step3..................score
let score=20;
document.querySelector('.score').innerHTML=score;

// .......step7
let highscore=0;
document.querySelector('.highscore').innerHTML=highscore;
// ...............step2     attach the event with the check buttton;
document.querySelector('.check').addEventListener('click',function(){
    let guess=document.querySelector('.guess').value;
    if(!guess){
        document.querySelector('.message').innerHTML='no number';
        document.querySelector('body').style.background='red';
// //////////////..........step4  ....  condition is score is greater the 1
    } else if(guess<Secretnumber){
        if(score>1)
        document.querySelector('.message').innerHTML='To LOW';
        document.querySelector('body').style.background='aqua';
        score--;
        document.querySelector('.score').innerHTML=score;
    } else if(guess>Secretnumber){
        if(score>1)
        document.querySelector('.message').innerHTML='To HIGH';
        document.querySelector('body').style.background='blue';
        score--;
        document.querySelector('.score').innerHTML=score;
    } // step 5  bg and width
    else if(guess==Secretnumber){
        document.querySelector('.message').innerHTML='you win the Game';
        document.querySelector('body').style.backgroundColor=' #60b347';
        document.querySelector('.number').innerHTML=Secretnumber;
        document.querySelector('.number').style.width='30rem';
        // .......step6....condition score is greater than the highscore
if(score>highscore){
    highscore +=score;
    // highscore=highscore+score;
    // highscore=0+1=1
    document.querySelector('.highscore').innerHTML=highscore;
}
       
    }
})
// .....AGIN
document.querySelector('.again').addEventListener('click',function(){
    Secretnumber=Math.trunc(Math.random()*20)+1;
    score=20;
    document.querySelector('.number').style.width='15rem';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.guess').value='';
    document.querySelector('.message').innerHTML='start guessing';
    highscore=0;
    document.querySelector('.highscore').innerHTML=highscore;
    document.querySelector('.number').textContent='?';
})
