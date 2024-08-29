window.addEventListener('load',function() {

    NextItem(0);
});

const ChangeText = document.querySelector('.to-replace-text');
const ChangeImage = document.querySelector('.to-replace-image');


const HeroList = {
    "Mech Head" : "images/portfolio/mechhead/combat.png",
    "Dismember Plugin" : "images/portfolio/OtherSide.png"
}


function SetText(InText){
    ChangeText.innerHTML = InText;
}

function SetImage(ImageURL){
    ChangeImage.src = ImageURL;
}

function NextItem(Index){

    var key = Object.keys(HeroList)[Index];
    var value = HeroList[key];
    SetText(key)
    SetImage(value)

}