function set_red()
{
// Function to turn RED light ON and other two lights OFF
setTimeout(() => {
// This function will turn the red light ON
// First TURN OFF the two other lights

document.getElementById("orange-light").outerHTML = document.getElementById("orange-light").outerHTML.replace("orange-circle","blank-circle")
document.getElementById("orange-light").innerHTML = 'LOOK'

// Get the HTML ID by using getElementById function and then replace the class with blank class. The class name would be fetched using outerHTML attribute.
// To run OFF, no need to chec whether its turned ON or not (to keep it simple)

document.getElementById("green-light").outerHTML = document.getElementById("green-light").outerHTML.replace("green-circle","blank-circle")
document.getElementById("green-light").innerHTML = 'GO'

document.getElementById("red-light").innerHTML = 'STOP'
document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("blank-circle","red-circle")
}, 8000);
}

// Function to run Orange Light ON

function set_orange()
{
setTimeout(() => {
document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("red-circle","blank-circle")
document.getElementById("red-light").innerHTML = 'STOP'
document.getElementById("green-light").outerHTML = document.getElementById("green-light").outerHTML.replace("green-circle","blank-circle")
document.getElementById("green-light").innerHTML = 'GO'
document.getElementById("orange-light").innerHTML = 'LOOK'
document.getElementById("orange-light").outerHTML = document.getElementById("orange-light").outerHTML.replace("blank-circle","orange-circle")
}, 5000);
}

// Function to run Green Light ON and other two OFF

function set_green()
{
setTimeout(() => {
document.getElementById("red-light").outerHTML = document.getElementById("red-light").outerHTML.replace("red-circle","blank-circle")
document.getElementById("red-light").innerHTML = 'STOP'
document.getElementById("orange-light").outerHTML = document.getElementById("orange-light").outerHTML.replace("orange-circle","blank-circle")
document.getElementById("orange-light").innerHTML = 'LOOK'
document.getElementById("green-light").innerHTML = 'GO'
document.getElementById("green-light").outerHTML = document.getElementById("green-light").outerHTML.replace("blank-circle","green-circle")
}, 1);
}

setInterval(() => {
set_green() ;
set_orange() ;
set_red() ;

}, 13000);