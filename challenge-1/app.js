const bulb=document.querySelector("#bulb");
const btn=document.querySelector("#toggleButton");
let status=document.querySelector("#status");



btn.addEventListener("click",()=>{
    console.log("clicked");
    bulb.classList.toggle("off");
    document.body.classList.toggle("dark-mode");
    status.innerHTML=bulb.classList.contains("off")?"Status : off":"Status: ON";
});