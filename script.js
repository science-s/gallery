var counter= 0;
images= document.getElementsByClassName("preview");
// var old =document.getElementById("image").innerHTML;
function upDate(pictur){
    prev = document.getElementById("image").innerHTML;
    document.getElementById("image").innerHTML=pictur.alt;
    document.getElementById("image").style.background="";
    document.getElementById("image").style.backgroundImage="url("+pictur.src+")";
}
function unDo(){
    document.getElementById("image").innerHTML=prev;
    document.getElementById("image").style.background="#8e68ff";
}

// click on arrows to go next or back 
images= document.getElementsByClassName("preview");
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        counter = (counter + 1) % images.length;
        upDate(images[counter]);
    } else if (e.key === 'ArrowLeft') {
        counter = (counter - 1 + images.length) % images.length;
        upDate(images[counter]);
    }
});
