let counter = 0
let secondarycounter = 10
let x = setInterval(() => { console.log(counter)
     if(counter< 10){
    document.getElementById("red").style.opacity = 1
document.getElementById("green").style.opacity = 0
document.getElementById("counter").innertext = 0 + counter
}
else if (counter == 10) {
    document.getElementById("counter").innertext = counter
    document.getElementById("red").style.opacity = 0
    document.getElementById("green").style.opacity = 1
}
else if (counter < 20 && counter > 10) {
    document.getElementById("counter").innertext = secondarycounter
    secondarycounter++
}
else if (counter == 20) {
    document.getElementById("counter").innertext = secondarycounter
    counter = 0
    secondarycounter = 10
}
counter++}, 500)