const textA = document.getElementById("pContent");

console.log(textA.id);
console.log(textA.name);

const buttons = document.querySelector(".b");

console.log(buttons.id);

const allButtons = document.querySelectorAll(".b");

console.log(allButtons[2].textContent);

const para = document.querySelector("#addAt p");

const spans = para.children;

console.log(spans);

const otherSpans = document.querySelectorAll("#addAt p span");