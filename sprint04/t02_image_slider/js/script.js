let offset = 0;
const sliderLine = document.querySelector('.slider-line'),
       container = document.querySelector('.container');

document.querySelector('.slider-prev').addEventListener('click', prevSlider)
document.querySelector('.slider-next').addEventListener('click', nextSlider)


let interval = setInterval(nextSlider,3000);
container.onmouseover = stopInterval;
container.onmouseout = goInterval;

function stopInterval(){
    clearInterval(interval);
}
function goInterval(){
    interval = setInterval(nextSlider,3000);
}

function prevSlider() {
    offset -= 550;
    if(offset < 0){
        offset = 1650;
    }
    sliderLine.style.left = -offset + 'px';
}

function nextSlider(){
    offset += 550;
    if(offset > 1650){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
}