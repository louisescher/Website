//Navbarslider Toggle
function toggle(){
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');
}

//Slidermenu scrolls

function homeScroll() {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
}
function aboutScroll() {
    $('body,html').animate({
        scrollTop: 1200
    }, 500);
}
function programmingScroll() {
    $('body,html').animate({
        scrollTop: 1950
    }, 500);
}
function projectsScroll() {
    $('body,html').animate({
        scrollTop: 2700
    }, 500);
}
function contactScroll() {
    $('body,html').animate({
        scrollTop: 3450
    }, 500);
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