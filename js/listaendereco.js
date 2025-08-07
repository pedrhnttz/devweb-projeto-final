const url = "https://go-wash-api.onrender.com/api/auth/address"

async function listarEndereco(){
    let tela = document.querySelector('body')
    tela.style.cssText = 'cursor: wait';

    let token = JSON.parse(localStorage.getItem('user'));
    let tbody = document.getElementById("tbody");

    api = await fetch(url,{
        method:"GET",
        headers:{
           'Authorization':'Bearer '+ token.access_token
        }
    })

    resposta = await api.json()
 
    for(let i = 0; i < resposta.data.length; i++){
        let tr = tbody.insertRow()

        let td_id = tr.insertCell()
        let td_title = tr.insertCell()
        let td_cep = tr.insertCell()
        let td_address = tr.insertCell()
        let td_acoes = tr.insertCell()

        td_id.innerText = resposta.data[i].id
        td_title.innerText = resposta.data[i].title
        td_cep.innerText = resposta.data[i].cep
        td_address.innerText = resposta.data[i].address

        let imgEdit = document.createElement('img')
        imgEdit.src = '../view/img/imgedit.png'
        imgEdit.setAttribute("onclick", "atualizarEndereco("+resposta.data[i].id+")")

        let imgDelete = document.createElement('img')
        imgDelete.src = '../view/img/imgdelete.png'
        imgDelete.setAttribute("onclick", "deletarEndereco("+resposta.data[i].id+")")

        td_acoes.appendChild(imgEdit)
        td_acoes.appendChild(imgDelete)
    }

    resposta.data.forEach((endereco) => {
        console.log(endereco)
    })
    tela.style.cssText = 'cursor: default'
}

async function deletarEndereco(id){

    let token = JSON.parse(localStorage.getItem('user'))

    api = await fetch("https://go-wash-api.onrender.com/api/auth/address/"+id,{
        method:"DELETE",
        headers:{
           'Authorization':'Bearer '+ token.access_token,
           'Cookie': 'gowash_session=0hGqRHf0q38ETNgEcJGce30LcPtuPKo48uKtb7Oj'
        }
    })
    window.location.reload()
}

function atualizarEndereco(id){
    window.location.href = "file:///C:/Users/prick/Documents/Impacta/Trabalhos/main/view/updateendereco.html?id="+id
}

listarEndereco()