let bg = document.getElementById("bg")
let headerSign = document.getElementById("headerSign")
let headerNew = document.getElementById("headerNew")
let formInn = document.getElementById("formInn")
let formNew = document.getElementById("formNew")
let fLogin = document.getElementById("fLogin")
let fNew = document.getElementById("fNew")
let wrap = document.getElementById("wrap")



window.onload = ()=>{
    wrap.classList.add("hidden")
    headerSign.classList.add("hiddenColor")
    formNew.classList.add("hidden")
    fNew.classList.add("hidden")    
}



headerNew.addEventListener("click", ()=>{
    headerSign.classList.remove("hiddenColor")
    headerNew.classList.add("hiddenColor")
    formNew.classList.remove("hidden")
    formInn.classList.add("hidden")
    fNew.classList.remove("hidden")   
    fLogin.classList.add("hidden") 
})

headerSign.addEventListener("click", ()=>{
    headerSign.classList.add("hiddenColor")
    headerNew.classList.remove("hiddenColor")
    formNew.classList.add("hidden")
    formInn.classList.remove("hidden")
    fNew.classList.add("hidden")   
    fLogin.classList.remove("hidden") 
})



const users = ["mylogin", "4320"]

function checkLogin (e){
     e.preventDefault();
    let userLogin = document.forma.formaLogin
    let userPass = document.forma.formaPassword
    if(userLogin.value === users[0] && userPass.value === users[1]){
        wrap.classList.remove("hidden")
        bg.classList.add("hidden")
    }else{
        alert("Login yoki parol xato");
    }
}

fLogin.addEventListener("click", checkLogin)
