let gethole = index => document.getElementById(`hole${index}`);
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


for (i = 1; i <= 9; i++) {
    gethole(i).onclick = function() {
        if (this.className.includes('hole_has-mole')) {
            dead.textContent = Number(dead.textContent) + 1
        }
        else {
            lost.textContent = Number(lost.textContent) + 1
        }

        if (dead.textContent == 10){
            alert("Вы выиграли")
            dead.textContent = 0
            lost.textContent = 0
        }
        else if (Number(lost.textContent) == 5){
            alert("Вы проиграли")
            dead.textContent = 0
            lost.textContent = 0
        }

    }
}