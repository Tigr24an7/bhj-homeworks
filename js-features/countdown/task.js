const timer=document.getElementById("timer");
function timerFunction(){
timer.textContent = Number(timer.textContent)-1;
    if (timer.textContent==0){
        clearInterval(interval);
        alert("Вы победили в конкурсе!");
    }
}
let interval = setInterval(timerFunction,1000);
