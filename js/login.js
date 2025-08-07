const url = 'https://go-wash-api.onrender.com/api/login'

async function loginUsuario(){
    let tela = document.querySelector('body')
    tela.style.cssText = 'cursor: wait';

    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let api = await fetch(url,{
        method: "POST",
        body:JSON.stringify(
            {
                "email": email,
                "password": password,
                "user_type_id": 1
            }            
        ),
        headers:{
            'Content-Type':'application/json'
        }
    })

    let resposta = await api.json();

    if(api.ok){
        
        console.log(resposta)
        alert('Login Efetuado!')
        localStorage.setItem('user', JSON.stringify(resposta));
        window.location.href = "../index.html";
        return
    }
    
    alert(resposta.data.errors)
    tela.style.cssText = 'cursor: default'
}

function mostrarSenha(){
    var inputpass = document.getElementById('password')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputpass.type === 'password'){
        inputpass.setAttribute('type', 'text')
        btnShowPass.classList.replace('bi-eye-slash', 'bi-eye')
    }else{
        inputpass.setAttribute('type', 'password')
        btnShowPass.classList.replace('bi-eye', 'bi-eye-slash')
    }
}