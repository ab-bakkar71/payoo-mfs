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
    }
    else{
        alert('Invalid Pin');
        return;
    }
});