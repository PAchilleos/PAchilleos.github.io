let word; //word to guess
let s; // character array of displayed word
var container;

function sve() {
    let w = document.getElementById("word").value;
    document.getElementById("word").value = "";
    return w;
}

function w() {
    document.getElementById("sofar").innerHTML = "";
    s = []; //empty
    word = sve();
    word = word.toUpperCase();
    container = document.createElement("p")

    for (let i = 0; i < word.length; i++) {
        s.push("_");
    }

    let a = s.join(" ");
    container.innerHTML = a;
    document.getElementById("sofar").appendChild(container);

}

function check(val) {
    let indices = [];
    for (let i = 0; i < word.length; i++) {
        if (word[i] === val) {
            s[i] = val;
        }
    }

    let a = s.join(" ");
    container.innerHTML = a;
    document.getElementById("sofar").appendChild(container);

}