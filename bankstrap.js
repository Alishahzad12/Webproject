'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary_value--in');
const labelSumOut = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.summary_value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form_btn--transfer');
const btnLoan = document.querySelector('.form_btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login_input--user');
const inputLoginPin = document.querySelector('.login_input--pin');
const inputTransferTo = document.querySelector('.form_input--to');
const inputTransferAmount = document.querySelector('.form_input--amount');
const inputLoanAmount = document.querySelector('.form_input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// time logout..........................
let setTimeout=function(){
  let time=300;
  let out=setInterval(function(){
    let min=String(Math.trunc(time/60)).padStart(2,0);
    let sec=time%60;
    labelTimer.textContent=`${min}:${sec}`;
    time--;
  if(time===0){
    containerApp.style.opacity=0;
    setTimeout(out)
  }
  },1000)
}
setTimeout();
//1:Display Movements:(abs: is used to remove any type of sign.)
const DisplayMovements=function(movements){
  let dated=new Date();
  let date=`${dated.getDate()}`.padStart(2,0);
  let month=`${dated.getMonth()}`.padStart(2,0);
  let year=`${dated.getFullYear()}`.padStart(2,0);
  date=`${date}/${month}/${year}`
    movements.forEach(function(mov,i,arr){
        const type=mov>0?'deposit':'withdrawl';
        const html=`<div class="movements__row">
        <div class="movements_type movements_type--${type}">${i}${type}</div>
   
          <p class="balance__date">
             <span class="date">${date}</span>
          </p>
        <div class="movements__value">${mov}</div>
      </div>`
      containerMovements.insertAdjacentHTML('afterbegin',html)
        
    });
}
// DisplayMovements(account1.movements)
//display-balance:
const displayBalance=function(acc){
  acc.balance=acc.movements.filter(function(val){
    return val>0;
  }).reduce(function(acc,val,i,arr){
    return acc+val;
  })
  labelBalance.textContent=`${acc.balance}€`

}
// displayBalance(account1.movements)

//display summary:    
const displaysummary=function(mov){
  let income=mov.filter(function(dep){
    return dep>0;
  }).reduce(function(acc,val,i,arr){
    return acc+val;
  })
  labelSumIn.textContent=`${income}€`
    //outcome:
  let outcome=mov.filter(function(withdrawl){
    return withdrawl<0;
  }).reduce(function(acc,val,i,arr){
    return acc+val;
  })
  labelSumOut.textContent=`${Math.abs(outcome)}€`
  //interest:
let interest=mov.filter(function(movs){
  return movs>0;
}).map(function(deposit){
  return deposit*0.2/100
}).reduce(function(acc,val,i,arr){
  return acc+val;
})
labelSumInterest.textContent=`${Math.trunc(interest)}`

}
// displaysummary(account1.movements)
// 07//12//2024:
//creating user name:
// const username=function(user){
// return user.toLowerCase().split(' ').map(function(mov){
// return mov[0]
// }).join('')
// }
// console.log(username('Steven Thomas Williams'));
const username=function(user){
  user.forEach(function(users){
    users.username=users.owner.toLowerCase().split(' ').map(function(mov){
      return mov[0]
    }).join('')
  })
}
username(accounts)
console.log(accounts);
let currentaccount;
btnLogin.addEventListener('click',function(e){
  e.preventDefault();
  let dated=new Date();
  let date=`${dated.getDate()}`.padStart(2,0);
  let month=`${dated.getMonth()}`.padStart(2,0);
  let year=`${dated.getFullYear()}`.padStart(2,0);
  let hours=`${dated.getHours()}`.padStart(2,0);
  let min=`${dated.getMinutes()}`.padStart(2,0);
  let sec=`${dated.getSeconds()}`.padStart(2,0);
  labelDate.textContent=`${date}/${month}/${year}/${hours}/${min}/${sec}`
  currentaccount=accounts.find(function(acc){
    return acc.username===inputLoginUsername.value
  })
  if(currentaccount.pin===Number(inputLoginPin.value)){
    //ui and label message:
    labelWelcome.textContent=`Welcome Back ${currentaccount.owner.split(' ')[0]}`
   containerApp.style.opacity=100;
   //movements:
   DisplayMovements(currentaccount.movements)
   //balance
   displayBalance (currentaccount)
  //summary
  displaysummary(currentaccount.movements)
  }
})
// transfer data:
btnTransfer.addEventListener('click',function(e){
  e.preventDefault();

  
  let amount = Number(inputTransferAmount.value);
  let reciever=accounts.find(function(acc){
    return acc.username===inputTransferTo.value;
  });
  if(
    amount>0&&
    reciever &&
    currentaccount.balance>amount &&
    reciever?.username !== currentaccount.username
  ) {
    reciever.movements.push(amount);
   currentaccount.movements.push(-amount);
      //movements:
      DisplayMovements(currentaccount.movements);
      //balance
      displayBalance (currentaccount);
     //summary
     displaysummary(currentaccount.movements);
     inputTransferAmount.value = '';
     inputTransferTo.value = '';
  }
})
btnLoan.addEventListener('click',function(e){
  e.preventDefault();
  let date=new Date();
  labelDate.textContent=date;
  let amount=Number(inputLoanAmount.value)
  console.log(amount);
  if(amount>0 && currentaccount.movements.some(function(acc){
    return acc>amount*0.1
  })){
    currentaccount.movements.push(amount);
    DisplayMovements(currentaccount.movements);
    //balance
    displayBalance (currentaccount);
   //summary
   displaysummary(currentaccount.movements);
  }
  inputLoanAmount.value='';
})
// creating Data

// let date = new Date(2024, 11, 18, 18, 34, 25);
// console.log(date);

let date=new Date();
console.log(date);
console.log(new Date('2024 12 20 5:57:5'));
console.log(new Date(2024, 11, 20, 5, 58, 10));
console.log(new Date('2024-12-20T05:59:02'));
// .......................
btnClose.addEventListener('click',function(e){
  e.preventDefault();
  if(currentaccount.username===inputCloseUsername.value && currentaccount.pin===Number(inputClosePin.value)){
    containerApp.style.opacity=0
    labelWelcome.textContent='log in to get Started'
    inputLoginPin.value='';
    inputLoginUsername.value='';
  }
})




