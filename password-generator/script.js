var passLength = document.querySelector(".pass_length");
var btn = document.querySelector(".btn");
var outField = document.querySelector("#out");

btn.addEventListener("click", function() { // run genPass() function after click
    genPass();
    }
)

passLength.addEventListener("input", function() {
    showLength();
    }
)

function showLength() {
    document.querySelector('.text').innerHTML = "Key Length: " + passLength.value;
}

function genPass() {
    let numbers_box = document.getElementById("numbers");
    let letters_box = document.getElementById("letters");
    let letUp_box = document.getElementById("letUp");
    let symb_box = document.getElementById("symb");
    let letters = "qwertyuiopasdfghjklzxcvbnm";
    let numbers = "1234567890";
    let letUp = letters.toUpperCase();
    let symb = '@$^*()_';
    let array = [];
    let out = "";
    if (letters_box.checked) {
        array.push(letters);
    }
    if (numbers_box.checked) {
        array.push(numbers);
    }
    if (letUp_box.checked) {
        array.push(letUp);
    }
    if (symb_box.checked) {
        array.push(symb);
    }
    for (var i = 0; i < passLength.value; i++) {
        var decision = Math.floor(Math.random()*(array.length - 0)+0);
        out+=array[decision][Math.floor(Math.random()*array[decision].length)]
    }
        outField.innerHTML = out;
        console.log(out);
}