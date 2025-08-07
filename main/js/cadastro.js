const url = 'https://go-wash-api.onrender.com/api/user';

async function cadastroUsuario(){
    let tela = document.querySelector('body')
    tela.style.cssText = 'cursor: wait';

    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let cpf_cnpj = document.getElementById('cpf_cnpj').value
    let password = document.getElementById('password').value
    let terms = document.getElementById('terms').checked
    let birthday = document.getElementById('birthday').value

    // Validar Nome
    if (!name){
        alert('Informe seu nome')
        return
    }
    
    // Validar CPF/CNPJ
    function validarCPF(cpf_cnpj){
        return cpf_cnpj.length === 11 || cpf_cnpj.length === 14;
    }

    if (!validarCPF(cpf_cnpj)){
        alert("CPF ou CNPJ inválido;")
        return
    }

    // Validar E-mail

    function validarEmail(email){
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }

    if (!validarEmail(email)) {
        alert('Email Inválido')
        return
    }

    // Validar Data

    if (!birthday){
        alert('Informe sua Data de Nascimento')
        return
    }

    // Validação da senha
    if (password.length < 6 || password.length > 8) {
        alert("A senha deve ter entre 6 e 8 dígitos.");
        return; // Encerrar a função se a senha não for válida
    }

    // Validação dos termos

    const checkbox = document.getElementById('terms')
    const termsChecked = checkbox.checked

    if (!termsChecked){
        alert("Aceite os termos e condições.");
        return; // Encerrar a função se a senha não for válida
    }

    // Joga pra API

    let api = await fetch(url,{
        method:"POST",
        body:JSON.stringify(
            {
                "name":name,
                "email":email,
                "user_type_id":1,
                "password": password,
                "cpf_cnpj": cpf_cnpj,
                "terms": terms,
                "birthday":birthday    
            }
        ),
        headers:{
            'Content-Type':'application/json'
        }
    })

    if(api.ok){
        let resposta = await api.json();
        console.log(resposta)
        alert('Cadastro Realizado!')
        window.location.href = "login.html";
        return
    }

    let respostaErro = await api.json();

    if(respostaErro.data.errors.cpf_cnpj){
        alert('Este CPF já esta sendo utilizado!')
    }
    if(respostaErro.data.errors.email){
        alert('Este email já esta sendo utilizado!')
    }
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