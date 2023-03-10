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
    const previousTypedNumber = typedNumbersField.value;

    if(isNaN(number)){
      if(number === 'C'){
        typedNumbersField.value="";
      }
      else if(number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');

            typedNumbersField.value= remainingDigits;
      }
    }
    else{
        
        const newTypedNumber = previousTypedNumber+number;
        typedNumbersField.value=newTypedNumber;

    }

})


document.getElementById('btn-submit').addEventListener('click',function(){
   const displayPinField = document.getElementById('display-pin');
   const currentPin = displayPinField.value;

   const typedNumbersField=document.getElementById('typed-numbers');
   const typedNumber = typedNumbersField.value;
   const pinSuccessMassage = document.getElementById('pin-success');
   const pinFailureMassage = document.getElementById('pin-failure');

   if(currentPin===typedNumber){
    
    pinSuccessMassage.style.display='block';
    pinFailureMassage.style.display='none';
   }
   else{

    pinFailureMassage.style.display='block';
    pinSuccessMassage.style.display='none';
    
   }
})