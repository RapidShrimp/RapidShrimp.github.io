const HamMenu = document.querySelector('.ham-menu');
const OffScreenMenu = document.querySelector('.off-screen-menu');


HamMenu.addEventListener('click',()=>{
    HamMenu.classList.toggle('active');
    OffScreenMenu.classList.toggle('active');

})


function ToggleDropdown(ID,Icon){
    let x = document.getElementById(ID);
    let y = document.getElementById(Icon);
    console.log(x);
    x.classList.toggle("collapse");
    y.classList.toggle("active");
}