// document.getElementById("increment-btn");
let count = 0;
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

function increment() {
  count += 1;
  countEl.innerHTML = count;
  console.log(count);
}

function save() {
  let separator = count + " - ";
  saveEl.innerHTML += separator;
  count = 0;
  countEl.innerHTML = count;
  console.log(count);
}
