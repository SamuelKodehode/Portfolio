"use strict";
const wizCube = document.getElementById('wiz-cube');
const cryptoTrader = document.getElementById('clicker');
const atomSim = document.getElementById('plant-reminder');
const div = document.querySelectorAll('.vig');
const projectText = document.getElementById('projects');
const projectTitle = document.getElementById('project-title');
const menuWrap = document.getElementById('menu-wrap');
const doc = document.body;
const background = document.getElementById('back-ground');
const phoneNumber = document.getElementById('phonePic');
const numberPhone = document.getElementById('numberPhone');
let numberBool = false;
const socials = document.getElementById('socials');
const logos = document.getElementById('logosss');
let logosBool = false;
const vignetteInn = () => {
    div.forEach((div) => {
        div.style.height = '25vh';
        div.style.backgroundColor = 'rgb(11,11,11)';
        document.body.style.height = '300vh';
        document.body.style.overflow = 'visible';
    });
};
phoneNumber.addEventListener('click', () => {
    numberBool = !numberBool;
    if (numberBool) {
        numberPhone.style.visibility = 'visible';
    }
    else {
        numberPhone.style.visibility = 'hidden';
    }
});
const email = document.getElementById('email');
const mail = document.getElementById('mail');
let mailBool = false;
email.addEventListener('click', () => {
    mailBool = !mailBool;
    if (mailBool) {
        mail.style.visibility = 'visible';
    }
    else {
        mail.style.visibility = 'hidden';
    }
});
const newWindow = (location) => {
    window.location.href = location;
};
const updateOpacity = () => {
    projectText.style.color = '1';
    menuWrap.style.opacity = '1';
};
if (wizCube) {
    wizCube.addEventListener('click', () => {
        background.style.opacity = '0';
        menuWrap.style.opacity = '0';
        projectText.style.transition = '700ms';
        background.style.transition = '700ms';
        menuWrap.style.transition = '700ms';
        projectText.style.opacity = '0';
        setTimeout(newWindow, 700, 'wizCubePage.html');
        setTimeout(vignetteInn, 1);
        document.body.style.height = '300vh';
        document.body.style.overflow = 'visible';
    });
    cryptoTrader.addEventListener('click', () => {
        background.style.opacity = '0';
        menuWrap.style.opacity = '0';
        projectText.style.transition = '700ms';
        background.style.transition = '700ms';
        menuWrap.style.transition = '700ms';
        projectText.style.opacity = '0';
        setTimeout(newWindow, 700, 'cryptoTrader.html');
        setTimeout(vignetteInn, 1);
        document.body.style.height = '300vh';
        document.body.style.overflow = 'visible';
    });
    atomSim.addEventListener('click', () => {
        background.style.opacity = '0';
        menuWrap.style.opacity = '0';
        projectText.style.transition = '700ms';
        background.style.transition = '700ms';
        menuWrap.style.transition = '700ms';
        projectText.style.opacity = '0';
        setTimeout(newWindow, 700, 'AtomSim.html');
        setTimeout(vignetteInn, 1);
        document.body.style.height = '300vh';
        document.body.style.overflow = 'visible';
    });
}
const about = document.getElementById('about-nav');
const projects = document.getElementById('projects-nav');
about.addEventListener('click', () => {
    setTimeout(newWindow, 0, 'about.html');
});
projects.addEventListener('click', () => {
    setTimeout(newWindow, 0, 'index.html');
});
socials.addEventListener('click', () => {
    numberPhone.style.visibility = 'visible';
    logosBool = !logosBool;
    logosBool ? (logos.style.opacity = '1') : (logos.style.opacity = '0');
    logosBool ? (logos.style.visibility = 'visible') : (logos.style.visibility = 'hidden');
});
//# sourceMappingURL=script.js.map