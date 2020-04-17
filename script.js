/** Add any JavaScript you need to this file. */

function Gate() {
    document.querySelectorAll("#door").forEach(element => element.style.display = 'none');
    document.querySelectorAll("#gate").forEach(element => element.style.display = 'initial');
    document.querySelectorAll("#gate-title").forEach(element => element.style.display = 'initial');
    document.querySelectorAll("#door-title").forEach(element => element.style.display = 'none');
}

function Door() {
    document.querySelectorAll("#door").forEach(element => element.style.display = 'initial');
    document.querySelectorAll("#gate").forEach(element => element.style.display = 'none');
    document.querySelectorAll("#door-title").forEach(element => element.style.display = 'initial');
    document.querySelectorAll("#gate-title").forEach(element => element.style.display = 'none');
}

function All() {
    document.querySelectorAll("#door").forEach(element => element.style.display = 'initial');
    document.querySelectorAll("#gate").forEach(element => element.style.display = 'initial');
    document.querySelectorAll("#door-title").forEach(element => element.style.display = 'none');
    document.querySelectorAll("#gate-title").forEach(element => element.style.display = 'none');
}

function responsive() {
    var x = document.getElementById("topnavbar");
    if (x.className === "topnavbar") {
        x.className += " responsive";
    } else {
        x.className = "topnavbar";
    }
}

function Order() {
    document.getElementById('ordernum-label').style.display = "initial";
    document.getElementById('ordernum').style.display = "initial";
}

function notOrder() {
    document.getElementById('ordernum-label').style.display = "none";
    document.getElementById('ordernum').style.display = "none";
}