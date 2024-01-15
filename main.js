// Eight Ball SIMULATOR

// HTML VARIABLES
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a Random Response
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the Ball Guess
  if (randNum < 0.5) {
    outputEl.innerHTML = "<img scr='magic-8-ball' />";
  } else {
    outputEl.innerHTML = "<img src='magic-8-ball' />";
  }
}

// "Without a Doubt."
// "As I see it, yes."
// "Concentrate and ask again."
// "Don't count on it."
// "Outlook not so good."

// "Does a magic 8 ball actually work?" --- "How dare you doubt me!"
// "I JavaScript awsome?" --- "Of course!"
