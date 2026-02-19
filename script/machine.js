// machine id input value

function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    console.log(id, value)
    return value;
}

// balance machine function

function getBalance(){
    const currentBalance = document.getElementById('balance');
    const balance = currentBalance.innerText;
    console.log('Current Balance:',balance)
    return Number(balance)
}

// set balance machine

function setBalance (value){
    const currentBalance = document.getElementById('balance');
    currentBalance.innerText = value;
}