const form = document.querySelector('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

function showError(input,message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ""
}

function checkEmptyError(listInput){
    let isEmtyError = false
    listInput.forEach(input => {
        input.value = input.value.trim() 
        if(!input.value)
        {
            isEmtyError = true
            showError(input,'Khong duoc de trong')
        }
        else
        {
            showSuccess(input)
        }
    });
    return isEmtyError
}

function checkEmailError(input)
{
    const regexEmail =   
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value = input.value.trim()

    let isEmailError = !regexEmail.test(input.value)

    if (regexEmail.test(input.value)){
        showSuccess(input)
    }
    else{
        showError(input,'Email Invalid')
    }
    return isEmailError
}

function checkLength(input,min,max)
{
    input.value = input.value.trim()
    if(input.value.length <min )
    {
        showError(input,`phai co it nhat ${min} ky tu`)
        return true
    }
    
    if(input.value.length > max)
    {
        showError(input,`phai it hon ${max} ky tu`)
        return true
    }
    showSuccess(input)
    return false
}


function checkMatchPasswordError(passwordInput, cfPassworkInput)
{
    if(passwordInput.value !== cfPassworkInput.value)
    {
        showError(cfPassworkInput,'Mk khong trung khop')
        return true
    }
    return false
}

form.addEventListener('submit',function(e){
    e.preventDefault()


    let isEmtyError = checkEmptyError([username,email,password,password2])
    let isEmailError = checkEmailError(email)
    let isPasswordLongError = checkLength(password,4,10)
    let isUsernameLongError = checkLength(username,3,10)
    let isMatchError = checkMatchPasswordError(password,password2)

    // if ( isEmtyError || isEmailError || isUsernameLongError || isPasswordLongError || is)

})