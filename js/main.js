'use strict';
let button = document.querySelector(".button");
let text = document.querySelector("#text").value;
let imya = document.querySelector("#name").value;
let email = document.querySelector("#email").value;
let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    if (imya.match(/(\w\s)+/)) {
        alert("введите корректное имя");
    } else if (email.match(/[\w._\d]+@(\w{2,10}).(\w{2,5})/)) {
        alert("введите корректный емейл");
    }
    if (text.length > 500) {
        alert("too much text");
        return false;
    }

    let data = new FormData();
    data.append("name", imya);
    data.append("email", email);
    data.append("text", text);
    fetch('send.php', {
        method: POST,
        body: data
    }).then(res => { console.log(res) });
    fetch('get.php').then(response => response.json).then(
        data => {
            let comments = JSON.stringify(data);
            console.log(comments);
        }
    )
    event.preventDefault();
});