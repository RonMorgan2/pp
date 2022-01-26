let initialCount = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  initialCount = initialCount + 1;
  countEl.textContent = initialCount;
  return console.log(initialCount);
}

function save() {
  
  console.log(initialCount);
  saveEl.textContent += initialCount;
  saveEl.textContent += "-";
  saveEl.textContent += " ";
  initialCount -= initialCount
  countEl.textContent = 0
 
}
