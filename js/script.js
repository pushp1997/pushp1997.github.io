// Change style of top container on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("myTop").classList.add("w3-card-4", "w3-animate-opacity");
        document.getElementById("myIntro").classList.add("w3-show-inline-block");
    } else {
        document.getElementById("myIntro").classList.remove("w3-show-inline-block");
        document.getElementById("myTop").classList.remove("w3-card-4", "w3-animate-opacity");
    }
}

// Open and close the sidebar on medium and small screens
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

//Swiching Tabs
function showHome(){
    $('.tab').removeClass('w3-deep-purple');
    $('.tab').eq(0).addClass('w3-deep-purple');
    w3.show('#home');
    w3.hide('#experience');
    w3.hide('#certification');
    w3.hide('#projects');
    w3.hide('#blog');
    w3.hide('#contact');
}
function showExperience(){
    $('.tab').removeClass('w3-deep-purple');
    $('.tab').eq(1).addClass('w3-deep-purple');
    w3.hide('#home');
    w3.show('#experience');
    w3.hide('#certification');
    w3.hide('#projects');
    w3.hide('#blog');
    w3.hide('#contact');
}
function showCertification(){
    $('.tab').removeClass('w3-deep-purple');
    $('.tab').eq(2).addClass('w3-deep-purple');
    w3.hide('#home');
    w3.hide('#experience');
    w3.show('#certification');
    w3.hide('#projects');
    w3.hide('#blog');
    w3.hide('#contact');
}
function showProjects(){
    $('.tab').removeClass('w3-deep-purple');
    $('.tab').eq(3).addClass('w3-deep-purple');
    w3.hide('#home');
    w3.hide('#experience');
    w3.hide('#certification');
    w3.show('#projects');
    w3.hide('#blog');
    w3.hide('#contact');
}
function showBlog(){
    $('.tab').removeClass('w3-deep-purple');
    $('.tab').eq(4).addClass('w3-deep-purple');
    w3.hide('#home');
    w3.hide('#experience');
    w3.hide('#certification');
    w3.hide('#projects');
    w3.show('#blog');
    w3.hide('#contact');
}
function showContact(){
    $('.tab').removeClass('w3-deep-purple');
    $('.tab').eq(5).addClass('w3-deep-purple');
    w3.hide('#home');
    w3.hide('#experience');
    w3.hide('#certification');
    w3.hide('#projects');
    w3.hide('#blog');
    w3.show('#contact');
}