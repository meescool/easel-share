/**
 * This small script is for opening and closing the main menu
 */
const navBtn = document.getElementById('navbutton');
const nav = document.getElementById('nav');

function closeMenu(){
    nav.style.display='none';
    navBtn.disabled = false;
}

function openMenu(){
    navBtn.disabled = true;
    nav.style.display = 'flex';
}