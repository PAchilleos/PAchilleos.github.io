let word; //word to guess
let s; // character array of displayed word
var container;
let j = 0;
let i = 1;

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
    container = document.createElement("h1")

    for (let i = 0; i < word.length; i++) {
        s.push("_");
    }

    let a = s.join(" ");
    container.innerHTML = a;
    document.getElementById("sofar").appendChild(container);

}

function check(val) {
    document.getElementById("letter-button-" + val).disabled = true;
    let indices = [];

    if (word.includes(val) && i < 10) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === val) {
                s[i] = val;
            }
        }
        a = s.join(" ");
        container.innerHTML = a;
        document.getElementById("sofar").appendChild(container);
    } else {
        if (i < 10) {
            changeImage();
        }
    }
    if (i == 10) {
        document.getElementById("res").innerHTML = "YOU LOSE MUAHAHAHA!!!"
        document.getElementById("img").classList.add('rotating');
    }
    if (!(a.includes("_"))) {
        document.getElementById("res").innerHTML = "YOU WIN YAY!!"
        i = 1000;
    }
}

function changeImage() {
    js = j + ".png";
    is = i + ".png";
    console.log(document.getElementById("img").src);
    document.getElementById("img").src = document.getElementById("img").src.replace(js, is);
    j++
    i++;
}