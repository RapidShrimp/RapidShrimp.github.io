const HamMenu = document.querySelector('.ham-menu');
const OffScreenMenu = document.querySelector('.off-screen-menu');


HamMenu.addEventListener('click',()=>{
    HamMenu.classList.toggle('active');
    OffScreenMenu.classList.toggle('active');

})