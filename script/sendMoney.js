// get btn click 
document.getElementById('send-money-btn').addEventListener('click', function(){
    const userNumber = getValueFromInput('user-number');
    if(userNumber.length !==11){
        alert("Invalid Number")
        return;
    }

    const sendMoneyAmount = getValueFromInput('send-money-amount');
    
    const currentBalance = getBalance();
    const balance = currentBalance - Number(sendMoneyAmount);
    if(balance < 0){
        alert('Insufficient funds');
        return;
    }

    const pin = getValueFromInput('send-money-pin');
    if(pin == 1234){
        alert('Send Money Success')
        setBalance(balance)

        const history = document.getElementById('history-container');

        const newHistory = document.createElement('div')

        newHistory.innerHTML =`
    <div class="transaction-card p-5 bg-base-100 mt-4">
    SendMoney ${sendMoneyAmount} taka Success, User Number:
    ${userNumber}, at ${new Date()}
    </div>
    `

        history.append(newHistory)
    }
    else{
        alert('Invalid Pin');
        return;
    }
})
