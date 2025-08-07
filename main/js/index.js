let user = JSON.parse(localStorage.getItem("user"))
let headerRightLogged = document.getElementById("header-right-logged")
let headerRight = document.getElementById("header-right")

if(!user){
    headerRight.style.display = "flex"
    headerRightLogged.style.display = "none"
}else{
    headerRight.style.display = "none"
    headerRightLogged.style.display = "flex"
    document.getElementById("header-name").innerHTML = "Olá, "+user.user.name
}

// Clima

async function Clima(){
    let token = "ad6c1e042a9d4873bed131249242911"
    api = await fetch("http://api.weatherapi.com/v1/forecast.json?key="+token+"&q=Sao Paulo&days=1&aqi=no&alerts=no",{
        method:"GET",
        headers:{
            "Transfer-Encoding": "chunked",
            "Connection": "keep-alive",
            "Vary": "Accept-Encoding",
            "CDN-PullZone": "93447",
            "CDN-Uid": "8fa3a04a-75d9-4707-8056-b7b33c8ac7fe",
            "CDN-RequestCountryCode": "GB",
            "x-weatherapi-qpm-left": "5000000",
            "CDN-ProxyVer": "1.06",
            "CDN-RequestPullSuccess": "True",
            "CDN-RequestPullCode": "200",
            "CDN-CachedAt": "11/29/2024 13:24:20",
            "CDN-EdgeStorageId": "1075",
            "CDN-Status": "200",
            "CDN-RequestTime": "1",
            "CDN-RequestId": "31845bf51158cfa61f15bb6956f372d5",
            "CDN-Cache": "MISS",
            "Cache-Control": "public, max-age=180",
            "Content-Type": "application/json",
            "Date": "Fri, 29 Nov 2024 13:24:20 GMT",
            "Server": "BunnyCDN-DE1-865"
          }
    })

    resposta = await api.json()

    console.log(resposta)

    document.getElementById("clima-c").innerHTML = resposta.current.temp_c + "°"
    document.getElementById("clima-loc").innerHTML = resposta.location.name + ":"

}

Clima()