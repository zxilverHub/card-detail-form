const nameDiv = document.querySelector('.name'),
      cardNumber = document.querySelector('.card-number'),
      mm = document.querySelector('.mm'),
      yy = document.querySelector('.yy'),
      cvc = document.querySelector('.cvc');



function handleConfirm() {
    const nameInput = document.getElementById('name').value,
          cardNumberInput = document.getElementById('number').value,
          mmInput = document.getElementById('mm-date').value,
          yyInput = document.getElementById('yy-date').value,
          cvcInput = document.getElementById('cvc-number').value,
          numberRegEx = /^\d{4} \d{4} \d{4} \d{4}$/,
          nameRegEx = /^[A-Za-z]/


    if(numberRegEx.test(cardNumberInput) && nameRegEx.test(nameInput) && (mmInput>=1 && mmInput<=12) && (yyInput>=1 && yyInput<=99) && (cvcInput>=1 && cvcInput<=999)) {
        nameDiv.textContent = nameInput
        cardNumber.textContent = cardNumberInput
        mm.textContent = mmInput
        yy.textContent = yyInput
        cvc.textContent = cvcInput

        document.getElementById('name').classList.remove("invalid")
        document.getElementById('number').classList.remove("invalid")
        document.getElementById('mm-date').classList.remove("invalid")
        document.getElementById('yy-date').classList.remove("invalid")
        document.getElementById('cvc-number').classList.remove("invalid")

    } else {
        if(!nameRegEx.test(nameInput))
            document.getElementById('name').classList.add("invalid")
        else
            document.getElementById('name').classList.remove("invalid")


        if(!numberRegEx.test(cardNumber))
            document.getElementById('number').classList.add("invalid")
        else
            document.getElementById('number').classList.remove("invalid")


        if(mmInput <= 0 || mmInput >=13)
            document.getElementById('mm-date').classList.add("invalid")
        else
            document.getElementById('mm-date').classList.remove("invalid")


        if(yyInput <= 0 || yyInput >=13)
            document.getElementById('yy-date').classList.add("invalid")
        else
            document.getElementById('yy-date').classList.remove("invalid")


        if(cvcInput <=0 || cvcInput > 999)
            document.getElementById('cvc-number').classList.add("invalid")
        else
            document.getElementById('cvc-number').classList.remove("invalid")

    }
}