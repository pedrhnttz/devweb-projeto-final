let user = JSON.parse(localStorage.getItem("user"))
let headerRightLogged = document.getElementById("header-right-logged")
let headerRight = document.getElementById("header-right")

// console.log(usuario.user.name)

if(!user){
    headerRight.style.display = "flex"
    headerRightLogged.style.display = "none"
}else{
    headerRight.style.display = "none"
    headerRightLogged.style.display = "flex"
    document.getElementById("header-name").innerHTML = "Olá, "+user.user.name
}