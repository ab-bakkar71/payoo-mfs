document.getElementById('login-btn')
.addEventListener('click', function(){
    // get the number & pin input
    const loginNumber= document.getElementById('input-number');
    const contactNumber = loginNumber.value;
    // console.log(contactNumber)
    const loginPin = document.getElementById('input-pin')
    const pin = loginPin.value;
    // console.log(pin)

    // match the mobile and pin
    if(contactNumber == "01234567890" && pin == '1234'){
        alert('Login success')
    }
    else{
        alert('login Failed')
        return;
    }
})