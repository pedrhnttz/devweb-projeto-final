const url = 'https://go-wash-api.onrender.com/api/auth/address'

async function cadastroEndereco(){
    let tela = document.querySelector('body')
    tela.style.cssText = 'cursor: wait';

    let title = document.getElementById('title').value
    let cep = document.getElementById('cep').value
    let address = document.getElementById('address').value
    let number = document.getElementById('number').value
    let complement = document.getElementById('complement').value
    let token = JSON.parse(localStorage.getItem('user'))

    let api = await fetch(url,{
        method: "POST",
        body:JSON.stringify(
            {
                "title": title,
                "cep": cep,
                "address": address,
                "number": number,
                "complement": complement
            }
        ),
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+ token.access_token
        }
    })

    if(api.ok){
        alert('Cadastro de Endereço Realizado!')
        window.location.href = "../view/listaendereco.html";
        return
    }

    alert('Houve um erro ao realizar o cadastro do endereço')
    tela.style.cssText = 'cursor: default'
}