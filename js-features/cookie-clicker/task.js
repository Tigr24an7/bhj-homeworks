const image = document.getElementById("cookie");
const clicker__counter = document.getElementById("clicker__counter");
function changeSizes(){
    if (image.width==200) {
        image.width = 150;
    }
    else if (image.width==150){
        image.width = 200;
    }
    clicker__counter.textContent = Number(clicker__counter.textContent)+1;
}
image.onclick=changeSizes;