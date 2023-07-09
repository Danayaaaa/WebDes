let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

var homeImage = document.getElementById('homeImage');
var images = ['/Y/home.png', '/Y/home2.png', '/Y/home3.png']; 

var currentIndex = -1; 

function changeImage() {
    currentIndex++; 
    if (currentIndex >= images.length) {
        currentIndex = 0; 
    }
    homeImage.src = images[currentIndex]; 
}

changeImage();

setInterval(changeImage, 3000);

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if(window.scrollY > 60){
        document.querySelector('#scroll-top').classList.add('active');
    }
    else {
        document.querySelector('#scroll-top').classList.remove('active');
    }
}

function loader(){
    document.querySelector('loaded-container').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();





