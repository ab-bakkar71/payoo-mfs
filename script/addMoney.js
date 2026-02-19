document.getElementById('add-money-btn').addEventListener('click', function(){
    // get bank name
    const bankName = getValueFromInput('add-money-bank');
    if(bankName == 'Select back'){
        alert('Please Added a bank')
        return;
    }
    // get bank account
    const bankAccountNumber = getValueFromInput('bank-account-number');
    if(bankAccountNumber.length !== 11){
        alert('invalid Bank Account')
        return;
    }
    // add Amount
    const amount = getValueFromInput('amount-number');
    const newBalance = getBalance ()+ Number(amount);

    const pin = getValueFromInput('add-money-pin');
    if(pin == 1234){
        alert('Add Money Success');
        setBalance(newBalance);
    // get history container
    const history = document.getElementById('history-container')

    // create new div
    const newHistory = document.createElement('div');

    // added innerHTML on newHistory div
    newHistory.innerHTML = `
    <div class="transaction-card p-5 bg-base-100 mt-4">
    Add Money Success from
    ${bankName}, Account No: ${bankAccountNumber}, at ${new Date()}
    </div>
    `
    // append on history
    history.append(newHistory);
    }
    else{
        alert('Invalid Pin');
        return;
    }
});