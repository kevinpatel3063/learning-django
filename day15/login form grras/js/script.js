const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
var data = [
    {
        "name":"Hriday",
        "email":"hriday@gmail.com",
        "password":12345 
    }
]

var counter = data.length
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

function signIn() {
    let email = document.getElementById("emailSignin").value
    let pass = document.getElementById("passwordSignin").value
    let flag = true;
    let flag1 = true;
    for(let i=0; i<data.length; i++) {
        if (data[i].email == email) {
            if(data[i].password == pass) {
                flag = false;
                break;
            } else {
                flag1 = false;
                break;
            }
        }
    }
    if(!flag1) {
        // console.log("Wrong pass")
        alert("Wrong password")
    }
    if(!flag) {
        console.log("You can proceed")
        window.location.href = "http://127.0.0.1:5500/homepage.html"
        // window.location.href = "https://google.com"
        console.log("ok")
    } else {
        // console.log("Please register")
        alert("Register")
        container.classList.add("right-panel-active");
    }
    // console.log(email, pass)
}

function signUp() {
    let name = document.getElementById("nameSignup").value
    let email = document.getElementById("emailSignup").value
    let password = document.getElementById("passwordSignup").value
    let flag = true;
    for(let i=0; i<data.length; i++) {
        if(data[i].name == name && data[i].email == email && data[i].password == password){
            // console.log("You are already there")
            flag = false;
            break;
        } 
    }
    if(flag) {
        data[counter] = {
            "name":name,
            "email":email,
            "password":password
        }
        counter++
        // container.classList.add("right-panel-active");
        container.classList.remove("right-panel-active");


    } else {
        // console.log("You are already there")
        // alert("You are already there")
        container.classList.remove("right-panel-active");

    }

    // console.log(name, email, password, data)
}

function check() {
    console.log(data, counter)
}