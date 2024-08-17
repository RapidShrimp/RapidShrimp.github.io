window.addEventListener('load',function() {
    //ToggleAll();
});


function ToggleSection(string) {
    const Query = document.querySelectorAll(string);
    for (let i = 0; i < Query.length; i++) {
        if (Query[i].style.display === "none") {
            Query[i].style.display = "inline-flex";
        } 
        else {
            Query[i].style.display = "none";
        }
    }
    CheckProjectList();
}

function ToggleAll(){

    const Query = document.querySelectorAll(".cardwrapper");
    for (let i = 0; i < Query.length; i++) {

        Query[i].style.display = "none";
    }
    CheckProjectList();
}

function CheckProjectList(){
    const Query = document.querySelectorAll(".cardwrapper");
    const ProjectList = document.getElementById("ProjectList");

    let VisibleElements = 0;
    for (let i = 0; i < Query.length; i++) {
        if (Query[i].style.display === "inline-flex") {
            VisibleElements++;
        } 

    }

    if(VisibleElements == 0){
        ProjectList.style.display="none";
        ProjectList.style.visibility="collapsed";

    }
    else{
        ProjectList.style.display="block";
        ProjectList.style.visibility="visible";

    }
}