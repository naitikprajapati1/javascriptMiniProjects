
const startBtn=document.querySelector('#start');
const stopBtn=document.querySelector('#stop');

let intervalId;
const randomColorgen =  function () {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
     document.body.style.background = "#" + randomColor;
    document.getElementById('para').innerHTML = "#" + randomColor;
    document.getElementById('para').style.background = "#" + randomColor;
}


startBtn.addEventListener("click", function () {
    if (!intervalId) {
        console.log(intervalId);
        intervalId = setInterval(randomColorgen, 1000);
    }
});
stopBtn.addEventListener("click", function () {
    clearInterval(intervalId);
    intervalId = null;
});