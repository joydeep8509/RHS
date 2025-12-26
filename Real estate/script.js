const track = document.querySelector(".slider-track");
let slides = document.querySelectorAll(".slider-track img");
let index = 0;
track.innerHTML += track.innerHTML;
slides = document.querySelectorAll(".slider-track img");

function slide() {
    index++;
    const slideWidth = document.querySelector(".hero-image").clientWidth;
    track.style.transition = "transform .6s ease-in-out";
    track.style.transform = `translateX(-${index * slideWidth}px)`;

    if (index === slides.length / 2) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 0;
            track.style.transform = "translateX(0px)";
        }, 600);
    }
}
setInterval(slide, 3000);


// Tab switching for login/register
function showTab(tab) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const tabs = document.querySelectorAll('.auth-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        tabs[0].classList.add('active');
    } else {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        tabs[1].classList.add('active');
    }
}

// Tab switching for panel (leads/listings)
function showPanelTab(tab) {
    const leadsContent = document.getElementById('leads-content');
    const listingsContent = document.getElementById('listings-content');
    const tabs = document.querySelectorAll('.panel-tab');
    
    tabs.forEach(t => t.classList.remove('active'));
    
    if (tab === 'leads') {
        leadsContent.style.display = 'block';
        listingsContent.style.display = 'none';
        tabs[0].classList.add('active');
    } else {
        leadsContent.style.display = 'none';
        listingsContent.style.display = 'block';
        tabs[1].classList.add('active');
    }
}