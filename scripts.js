//VALIDATION


const email = document.querySelector('[required]')

function validateField(field){
    function verrifyErrors(){
        let foundError = false;

        for(let error in field.validity){
            if(field.validity[error] && !field.validity.valid ){
                foundError = error
            }
        }

        return foundError
    }
    
    function customMessage(typeError){
        const messages = {
            email:{
                valueMissing:"Whoops! It looks like you forgot to add your email",
                typeMismatch: "Please provide a valid email address"
            }
        }

        return messages[field.type][typeError]
    }


    function setCustomMessage(message){
        const p = document.querySelector('#text')

        if(message){
            p.innerHTML = message
        }else{
            p.innerHTML = ''
        }
    }

    return ()=>{

        const error = verrifyErrors()
        if(error){
            const message = customMessage(error)
            field.style.borderColor = 'hsl(354, 100%, 66%)'
            setCustomMessage(message)
        }else{
            field.style.borderColor = 'hsl(0, 0%, 59%)'
            setCustomMessage()
        }
    }

}


function customValidation(event){
    const field = event.target


    const validation = validateField(field)

    validation()
}

email.addEventListener('invalid', event=>{
    event.preventDefault()
    customValidation(event)
})
email.addEventListener('blur', customValidation)




document.querySelector('form').addEventListener('submit', function (event){

    event.preventDefault()
})