document.getElementById('cashout-btn').addEventListener('click', function(){
// get the agent Number
const agentNumber = document.getElementById('agent-number');
const agent = agentNumber.value;
if(agent.length != 11){
    alert('Invalid Agent Number')
    return;
}

// get the Amount
const amountNumber = document.getElementById('amount-number');
const cashOutAmount = amountNumber.value;


// get the current balance
const currentBalance = document.getElementById('balance');
const balance = currentBalance.innerText;


// new balance calculate
const newBalance = Number(balance) - Number(cashOutAmount);
if(newBalance < 0){
    alert('invalid amount')
    return;
}

// verify Pin 

const cashOutPin = document.getElementById('cashout-pin')
const pin = cashOutPin.value;
if(pin == 1234){
    alert('Cash out success')
    console.log('new balance:', newBalance)
    currentBalance.innerText = newBalance
}
else{
    alert('invalid Pin')
    return;
}
});