function getPin(){
    const pin = generatePin();
    const pinString = pin+'';
    if(pinString.length===4){
        return pin;
    }
    else{
        // console.log("3 digit found ", pin)
        return getPin();
    }
}


function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
}


document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    //display Pin
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value=pin;
})

document.getElementById('calculator').addEventListener('click',function(){
    const number = event.target.innerText;
    const typedNumbersField = document.getElementById('typed-numbers');
    if(isNaN(number)){
      if(number === 'C'){
        typedNumbersField.value="";
      }
      else {

      }
    }
    else{
        const previousTypedNumber = typedNumbersField.value;
        const newTypedNumber = previousTypedNumber+number;
        typedNumbersField.value=newTypedNumber;

    }

})