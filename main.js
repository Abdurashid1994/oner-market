let bg = document.getElementById("bg")
let headerSign = document.getElementById("headerSign")
let headerNew = document.getElementById("headerNew")
let formInn = document.getElementById("formInn")
let formNew = document.getElementById("formNew")
let fLogin = document.getElementById("fLogin")
let fNew = document.getElementById("fNew")
let wrap = document.getElementById("wrap")

window.onload = () => {
    wrap.classList.add("hidden")
    headerSign.classList.add("hiddenColor")
    formNew.classList.add("hidden")
    fNew.classList.add("hidden")
}

headerNew.addEventListener("click", () => {
    headerSign.classList.remove("hiddenColor")
    headerNew.classList.add("hiddenColor")
    formNew.classList.remove("hidden")
    formInn.classList.add("hidden")
    fNew.classList.remove("hidden")
    fLogin.classList.add("hidden")
})

headerSign.addEventListener("click", () => {
    headerSign.classList.add("hiddenColor")
    headerNew.classList.remove("hiddenColor")
    formNew.classList.add("hidden")
    formInn.classList.remove("hidden")
    fNew.classList.add("hidden")
    fLogin.classList.remove("hidden")
})

let regEx = /^[A-Za-z0-9]{6,12}$/
const usLogin = document.forma.usLogin.value.trim()
const usPassword = document.forma.usPassword.value.trim()



function formvalidation(usermirror) {
    let value = usermirror.value.trim()
    usermirror.style.outline = "none"

    usermirror.classList.remove("borderColorGreen", "borderColorRed")

    if (regEx.test(value)) {
        usermirror.classList.add("borderColorGreen")
    } else {
        usermirror.classList.add("borderColorRed")
    }
}


document.forma.usLogin.addEventListener("keyup", (e) => formvalidation(e.target))
document.forma.usPassword.addEventListener("keyup", (e) => formvalidation(e.target))




// document.forma.usLogin.addEventListener("keyup", (e) => {
//     let inputt = document.forma.usLogin
//     inputt.style.outline = "none"
//     inputt.classList.remove("borderColorRed", "borderColorGreen")

//     if (regEx.test(e.target.value)) {
//         document.forma.usLogin.classList.add("borderColorGreen")
//         // console.log(e.target.value);
//     } else {
//         document.forma.usLogin.classList.add("borderColorRed")
//         // console.log(e.target.value);
//     }
// })





fNew.addEventListener("click", (e) => {
    e.preventDefault()


    const usLogin = document.forma.usLogin.value.trim()
    const usPassword = document.forma.usPassword.value.trim()


    if (regEx.test(usLogin) && regEx.test(usPassword)) {

        headerNew.classList.remove("hiddenColor")
        headerSign.classList.add("hiddenColor")
        formNew.classList.add("hidden")
        formInn.classList.remove("hidden")
        fNew.classList.add("hidden")
        fLogin.classList.remove("hidden")

        localStorage.setItem("loggin", usLogin)
        localStorage.setItem("passworrd", usPassword)

        document.forma.usLogin.value = ""
        document.forma.usPassword.value = ""

    } else {
        alert("login yoki parol xato")
        console.log(usLogin);

         document.forma.usLogin.value = ""
        document.forma.usPassword.value = ""
    }
})




function checkLogin(e) {
    e.preventDefault();
    let userLogin = document.forma.formaLogin.value
    let userPass = document.forma.formaPassword.value

    let locLogin = localStorage.getItem("loggin")
    let locPass = localStorage.getItem("passworrd")

    if (userLogin === locLogin && userPass === locPass && userLogin !== "" && userPass !== "") {
        wrap.classList.remove("hidden")
        bg.classList.add("hidden")
    } else {
        alert("Login yoki parol xato");
        document.forma.formaLogin.value = ""
        document.forma.formaPassword.value = ""
    }


}

fLogin.addEventListener("click", checkLogin)