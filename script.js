console.log("load");
window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("siden vises");
    //hvad skal der ske
    showStart();
}


function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");

    document.querySelector("#play").classList.add("pulse");

    document.querySelector("#play").addEventListener("click", hideStart)





}


function hideStart() {
    console.log("der er klikket");
    document.querySelector("#play").removeEventListener("click", hideStart);

    document.querySelector("#play").classList.remove("pluse");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("start game");
    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.remove("fade_out");

    document.querySelector("#start").classList.add("hide");



}






//Juhhu

//En variabel med et tal
let score = 0;

window.addEventListener("load", pageLoaded);


function pageLoaded() {
    console.log("Loaded");

    document.querySelector("#score").innerHTML = "score: " + score;

    document.querySelector("#fall").addEventListener("click", clickFall);
    document.querySelector("#fall").addEventListener("click", clickFall);

}


function clickFall() {
    console.log("fall");
    //score = score + 5;
    //score += 5;
    score++;
    console.log(score);

    document.querySelector("#score").innerHTML = "score: " + score;
}

function clickFall() {
    console.log("fall");
    //score = score + 5;
    //score += 5;
    score--;
    console.log(score);

    document.querySelector("#score").innerHTML = "score: " + score;
}
