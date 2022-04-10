// scrollbar
let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}
//
// rain

function rain() {
    let amount = 200;
    let body = document.getElementById('rain');
    let i = 0;
    while(i < amount) {
        let drop = document.createElement('i');
        drop.setAttribute('class', 'raindrop');
        let size = Math.random() * 5;
        let posX = Math.floor(Math.random() * window.innerWidth);
        let delay = Math.random() * -20;
        let duration = Math.random() * 5;
        
        drop.style.width = 0.2 + size+'px';
        drop.style.left = posX + 'px';
        drop.style.animationDelay = delay + 's';
        drop.style.animationDuration = 1 + duration + 's';
        body.appendChild(drop);
        i++
    }
}
rain();