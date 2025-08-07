const url = new URLSearchParams(location.search)
let id = url.get("id")

document.getElementById("header-title").innerHTML = "Atualizar endereço "+id

async function exibirDados(){
    let tela = document.querySelector('body')
    tela.style.cssText = 'cursor: wait';

    let token = JSON.parse(localStorage.getItem('user'));

    api = await fetch("https://go-wash-api.onrender.com/api/auth/address",{
        method:"GET",
        headers:{
           'Authorization':'Bearer '+ token.access_token
        }
    })

    resposta = await api.json()

    for(let i = 0; i < resposta.data.length; i++){
        if(resposta.data[i].id == id){
            console.log(resposta.data[i])
            document.getElementById('title').value = resposta.data[i].title
            document.getElementById('cep').value = resposta.data[i].cep
            document.getElementById('address').value = resposta.data[i].address
            document.getElementById('number').value = resposta.data[i].number
            document.getElementById('complement').value = resposta.data[i].complement
        }
    }
    tela.style.cssText = 'cursor: default'
}

async function atualizarEndereco(){
    let tela = document.querySelector('body')
    tela.style.cssText = 'cursor: wait';
    
    let title = document.getElementById('title').value
    let cep = document.getElementById('cep').value
    let address = document.getElementById('address').value
    let number = document.getElementById('number').value
    let complement = document.getElementById('complement').value
    let token = JSON.parse(localStorage.getItem('user'))

    let api = await fetch("https://go-wash-api.onrender.com/api/auth/address/"+id,{
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
        alert('Endereço Atualizado!')
        window.location.href = "../view/listaendereco.html";
        return
    }

    alert('Houve um erro ao realizar o cadastro do endereço')
    tela.style.cssText = 'cursor: default'
}

exibirDados()