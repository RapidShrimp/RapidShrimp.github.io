window.addEventListener('load',function() {
});

const ChangeText = document.querySelector('.to-replace-text');
const ChangeImage = document.querySelector('.to-replace-image');
var CurrentIndex = -1;

const HeroList = {
    "Mech Head" : "images/portfolio/mechhead/combat.png",
    "Dismemberment Plugin" : "images/portfolio/Skeletal Dismemberment/SkeletalDismemberment.png",
    "The Other Side" : "images/portfolio/OtherSide.png"
}


function SetText(InText){
    ChangeText.innerHTML = InText;
}

function SetImage(ImageURL){
    //ChangeImage.src = ImageURL;
    ChangeImage.style.backgroundImage = "url("+ImageURL+")";

}


function HideHero(){
    ChangeImage.classList.toggle('active');
    ChangeText.classList.toggle('active');
    setTimeout(NextItem(),5000)
}

function NextItem(){
    CurrentIndex++;    
    if(CurrentIndex == Object.keys(HeroList).length){
        CurrentIndex = 0;
    }
    var key = Object.keys(HeroList)[CurrentIndex];
    var value = HeroList[key];
    SetText(key);
    SetImage(value);    
    console.log(CurrentIndex);
    setTimeout(RevealHero,5000);

}

function RevealHero(){
    ChangeImage.classList.toggle('active');
    ChangeText.classList.toggle('active');
    setTimeout(HideHero,500);
}
NextItem();
