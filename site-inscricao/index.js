function subscribe(){
    let email = document.getElementById("txtEmail")

    if(email.value == '')
    {
        alert("Por favor, digite seu email.")
    }
    else{
        alert("Inscrição realizada com sucesso!")
        email.value = ''
    }  
}