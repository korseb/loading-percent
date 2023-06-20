const counterEl= document.querySelector(".counter");
const barEl = document.querySelector(".loading-bar-front");

let idx = 0;

function updateProcent() {
    counterEl.innerHTML = idx + "%";
    barEl.style.width = idx + "%";
    idx ++;
    if(idx <101) {
        setTimeout(updateProcent, 20);
    };

}
updateProcent();


