let bubbles = "";
let timer = 30;
let randomHits = 0;
let score = 0;
let audio=document.querySelector('#click-audio');
for (let i = 0; i <= 90; i++) {
  let rand = parseInt(Math.random() * 10);
  bubbles += `<div class="bubble">
   ${rand}
</div>`;
}
document.querySelector("#bubbles").innerHTML = bubbles;

function timerCount() {
  let set=setInterval(() => {
    if (timer > 0) {
      timer--;
      console.log(timer);
      document.querySelector(".Timer").textContent = timer;
    }
    else{
clearInterval(set);
document.querySelector("#bubbles").removeEventListener("click", clickHandler);

document.querySelector('#bubbles').innerHTML =`<div id="para-group">
<h3 id="para-bubble">Game Over</h3>
<h3 id="para-bubble">Your Current Score is ${score}</h3>

<div/>`;
    }
  }, 1000);
}

function hitsCount() {
  randomHits = parseInt(Math.random() * 10);
  document.querySelector(".hits").innerHTML = randomHits;
}
function increseScore() {
  score += 10;
  document.querySelector(".score").textContent = score;
}
function scoresCount(value) {
  if (randomHits == value) {
    increseScore();
    hitsCount();
  }
}
timerCount();
hitsCount();

function clickHandler(e) {
  audio.play();
  let value = Number(e.target.innerHTML);
  scoresCount(value);
}
document.querySelector("#bubbles").addEventListener("click", clickHandler);

// document.querySelector('#refresh').addEventListener("click",function(){
//     location.reload();
// })
