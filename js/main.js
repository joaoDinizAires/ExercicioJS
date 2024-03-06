const form = document.getElementById('form-ABfield');
let errorMsg = document.createElement('p');
errorMsg.classList.add('alert', 'alert-danger', 'mt-3');
let successMsg = document.createElement('p');
successMsg.classList.add('alert', 'alert-success','mt-3')
form.addEventListener('submit',function(e){
    e.preventDefault();
    const aField = document.getElementById('aField');
    const bField = document.getElementById('bField');
    if( isNaN(parseInt(aField.value)) || isNaN(parseInt(bField.value))){
        errorMsg.textContent = "Os campos precisam ser numéricos";
        form.appendChild(errorMsg);
    }else if(parseInt(aField.value) > parseInt(bField.value)){
        errorMsg.textContent = "O campo B precisa ser maior que A";
        form.appendChild(errorMsg);
    }else{
        successMsg.textContent = "Formulário Válido!";
        form.appendChild(successMsg);
    }
})