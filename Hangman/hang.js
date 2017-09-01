let word; //word to guess
let wordList = [];
let s; // character array of displayed word
var container;
let j;
let i;
let xhr;
let url = "https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt";
let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



function promisedCondition(xhr) {
    return new Promise((resolve) => {
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                wordList = this.responseText.split("\n");
                resolve(wordList);
            }
        }

    })
}




function reset_hangman() {
    j = 0;
    i = 1;
    document.getElementById("img").src = "0.png"
    document.getElementById("img").classList.remove("rotating");
    document.getElementById("res").innerHTML = "";


    for (let i = 0; i < letters.length; i++) {
        let eyedee = letters[i];
        document.getElementById("letter-button-" + eyedee).disabled = false;
    }
}

function get_word() {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    promisedCondition(xhr).then(pickRandomWord);
    xhr.send();

}


function pickRandomWord() {
    let num = Math.round(Math.random() * wordList.length);
    let randomWord = wordList[num];
    w(randomWord);
}

function make_word(x) {

    word = x;
    //console.log(word);
    word = word.replace(/\s/g, '');
    word = word.toUpperCase();


}

function make_hyphens() {
    container = document.createElement("h1");
    for (let i = 0; i < word.length; i++) {
        s.push("_");
    }


    let a = s.join(" ");
    container.innerHTML = a;
    document.getElementById("sofar").appendChild(container);

    console.log("");

}

function w(wrd) {
    reset_hangman();
    document.getElementById("wordy").value = "";
    document.getElementById("sofar").innerHTML = "";
    s = []; //empty
    make_word(wrd);
    make_hyphens();
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