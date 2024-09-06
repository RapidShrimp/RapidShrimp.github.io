window.addEventListener('load',function() {



});

function ToggleSection(string) {

    HideAll();
    
    //Show All Button
    let x = document.getElementById("ShowAllButton");
    x.classList.toggle("highlight-disabled");

    //Hide all other cards
    const Query = document.querySelectorAll(string);
    for (let i = 0; i < Query.length; i++) {
        if (Query[i].style.display === "none") {
            Query[i].style.display = "inline-flex";
        } 
        else {
            Query[i].style.display = "none";
        }
    }
}

function HideAll(){

    const Query = document.querySelectorAll(".cardwrapper");
    for (let i = 0; i < Query.length; i++) {

        Query[i].style.display = "none";
    }
}
function ShowAll(){

    const Query = document.querySelectorAll(".cardwrapper");
    for (let i = 0; i < Query.length; i++) {

        Query[i].style.display = "inline-flex";
    }
    let x = document.getElementById("ShowAllButton");
    x.classList.toggle("highlight-disabled");
}
