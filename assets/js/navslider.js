//Navbarslider Toggle
function toggle(){
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');
}

//Slidermenu scrolls

function leaveScroll() {
    setTimeout(1000)
    $('body,html').animate({
        scrollTop: window.screen.height * window.devicePixelRatio * 1
    }, 1000);
}
function loadScroll() {
    $('body,html').animate({
        scrollTop: window.screen.height * window.devicePixelRatio * 2.5
    }, 0);
    setTimeout(1000); 
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
}

$(document).ready(() => {
    loadScroll();
    $('#home').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        leaveScroll()
        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000);
    });

    $('#about').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        leaveScroll()
        setTimeout(function() {
            window.location.href = "about.html";
        }, 1000);
    });

    $('#programming').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        leaveScroll()
        setTimeout(function() {
            window.location.href = "skills.html";
        }, 1000);
        
    });

    $('#tools').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        leaveScroll()
        setTimeout(function() {
            window.location.href = "tools.html";
        }, 1000);
    });

    $('#gear').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        leaveScroll()
        setTimeout(function() {
            window.location.href = "equipment.html";
        }, 1000);
    });

    $('#projects').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        leaveScroll()
        setTimeout(function() {
            window.location.href = "projects.html";
        }, 1000);
    });

    $('#contact').on("click", function(){
        var sec = document.getElementById('sec');
        sec.classList.toggle('active');
        leaveScroll()
        setTimeout(function() {
            window.location.href = "contact.html";
        }, 1000);
    });
});