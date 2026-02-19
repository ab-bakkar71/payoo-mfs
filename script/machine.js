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

// machine id > hide all > show id

function showOnly(id){
    const addMoney = document.getElementById('add-balance');
    const cashOut = document.getElementById('cashout');
    const history = document.getElementById('history');
    // console.log(`add money- ${addMoney}, cash Out- ${cashOut}`)
    // hide all
    addMoney.classList.add('hidden');
    cashOut.classList.add('hidden');
    history.classList.add('hidden')

    // show only id element 
    const selected = document.getElementById(id);
    selected.classList.remove('hidden')
}