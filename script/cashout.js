// function using machine

document.getElementById('cashout-btn').addEventListener('click', function(){
    // get the agent Number
    const agentNumber = getValueFromInput('agent-number');
    if(agentNumber.length !== 11){
        alert('Invalid Agent Number')
        return;
    }
    
    // get the Amount
    const cashOutAmount = getValueFromInput('cashout-number');

    // get the current balance
    const currentBalance =getBalance()
    const newBalance = currentBalance - Number(cashOutAmount);

    if(newBalance < 0){
        alert('Insufficient funds')
        return; 
    }
    // verify Pin
    const pin = getValueFromInput('cashout-pin')
    if(pin == 1234){
        alert('cashOut Success')
        setBalance(newBalance);

        const history = document.getElementById('history-container')

    // create new div
    const newHistory = document.createElement('div');

    // added innerHTML on newHistory div
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 mt-4">
    CashOut ${cashOutAmount} taka Success, Agent Number:
    ${agentNumber}, at ${new Date()}
    </div>
    `
    // append on history
    history.append(newHistory);
    }
    else{
        alert('invalid Pin')
        return;
    }
})












// document.getElementById('cashout-btn').addEventListener('click', function(){
// // get the agent Number
// const agentNumber = document.getElementById('agent-number');
// const agent = agentNumber.value;
// if(agent.length != 11){
//     alert('Invalid Agent Number')
//     return;
// }

// // get the Amount
// const amountNumber = document.getElementById('amount-number');
// const cashOutAmount = amountNumber.value;


// // get the current balance
// const currentBalance = document.getElementById('balance');
// const balance = currentBalance.innerText;


// // new balance calculate
// const newBalance = Number(balance) - Number(cashOutAmount);
// if(newBalance < 0){
//     alert('invalid amount')
//     return;
// }

// // verify Pin 

// const cashOutPin = document.getElementById('cashout-pin')
// const pin = cashOutPin.value;
// if(pin == 1234){
//     alert('Cash out success')
//     console.log('new balance:', newBalance)
//     currentBalance.innerText = newBalance
// }
// else{
//     alert('invalid Pin')
//     return;
// }
// });