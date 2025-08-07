let user = JSON.parse(localStorage.getItem("user"))

document.getElementById("name").innerHTML = user.user.name

function logout(){
    let tela = document.querySelector('body')
    tela.style.cssText = 'cursor: wait';

    localStorage.clear()

    alert('Logout Realizado!')
    window.location.href = "../index.html"

    tela.style.cssText = 'cursor: default'
}