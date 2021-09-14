//Navbarslider Toggle
function toggle(){
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');
}

//Slidermenu scrolls

function homeScroll() {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
}
function aboutScroll() {
    $('body,html').animate({
        scrollTop: 1200
    }, 600);
}
function programmingScroll() {
    $('body,html').animate({
        scrollTop: 1980
    }, 600);
}
function toolsScroll() {
    $('body,html').animate({
        scrollTop: 2800
    }, 600);
}
function projectsScroll() {
    $('body,html').animate({
        scrollTop: 3690
    }, 600);
}
function contactScroll() {
    $('body,html').animate({
        scrollTop: 4620
    }, 600);
}

$(document).ready(() => {
    $('#home').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        setTimeout(function() {
            homeScroll()
        }, 500)
    });
    $('#about').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        setTimeout(function() {
            aboutScroll()
        }, 500)
    });
    $('#programming').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        setTimeout(function() {
            programmingScroll()
        }, 500)
    });
    $('#tools').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        setTimeout(function() {
            toolsScroll()
        }, 500)
    });
    $('#projects').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        setTimeout(function() {
            projectsScroll()
        }, 500)
    });
    $('#contact').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        setTimeout(function() {
            contactScroll()
        }, 500)
    });
});