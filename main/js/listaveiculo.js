const url = "https://go-wash-api.onrender.com/api/auth/vehicle"

async function listarVeiculo(){
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

        let td_brand = tr.insertCell()
        let td_color = tr.insertCell()
        let td_model = tr.insertCell()
        let td_type = tr.insertCell()
        let td_year = tr.insertCell()

        td_brand.innerText = resposta.data[i].brand
        td_color.innerText = resposta.data[i].color
        td_model.innerText = resposta.data[i].model
        td_type.innerText = resposta.data[i].type
        td_year.innerText = resposta.data[i].year
    }

    resposta.data.forEach((veiculo) => {
        console.log(veiculo)
    })
    tela.style.cssText = 'cursor: default'
}

listarVeiculo()