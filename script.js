/** Add any JavaScript you need to this file. */

function Gate() {
    // document.querySelectorAll("#door").style.visibility = "hidden";
    // document.querySelectorAll("#gate").style.visibility = "visible";
    var door = document.querySelectorAll(".door");
    for (var i = 0; i < door.length; i++) {
        door[i].style.display = 'none';
    }

    var gate = document.querySelectorAll(".gate");
    for (var i = 0; i < gate.length; i++) {
        gate[i].style.display = 'initial';
    }
}

function Door() {
    document.querySelectorAll("#gate").style.visibility = "hidden";
    document.querySelectorAll("#door").style.visibility = "visible";
}

function All() {
    document.querySelectorAll("#gate").style.visibility = "visible";
    document.querySelectorAll("#door").style.visibility = "visible";
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