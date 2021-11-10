var currentLocation;

var path = window.location.pathname;
var page = path.split("/").pop();

//Letzte Page als Session Storage

if(window.location.hostname === "codedotspirit.dev" || window.location.hostname === "codedotspirit.pages.dev") {
    if(page == "about.html") {
        currentLocation = 2;
    } else if(page == "skills.html") {
        currentLocation = 3;
    } else if(page == "tools.html") {
        currentLocation = 4;
    } else if(page == "gear.html") {
        currentLocation = 5;
    } else if(page == "projects.html") {
        currentLocation = 6;
    } else if(page == "contact.html") {
        currentLocation = 7;
    } else {
        currentLocation = 1;
    }
}

var lastRedirect; // 1 or 0
var retrievedObject = localStorage.getItem('LastRedirect');

//Navbarslider Toggle
function toggle(){
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');
}

//Slidermenu scrolls

function loadScrollHigher() {
    $('body,html').animate({
        scrollTop: window.screen.height * window.devicePixelRatio * 2.6
    }, 0);
    $('.wrapper').fadeTo("fast", 1);
    setTimeout(1000); 
    $('body,html').animate({
        scrollTop: window.screen.height * window.devicePixelRatio * 0.7
    }, 1000);
}
function loadScrollLower() {
    $('body,html').animate({
        scrollTop: window.screen.height * window.devicePixelRatio * -2.6
    }, 0);
    $('.wrapper').fadeTo("fast", 1);
    $('body,html').animate({
        scrollTop: window.screen.height * window.devicePixelRatio * 0.7
    }, 1000);
}

function leaveScrollLower() {
    $('body,html').animate({
        scrollTop: window.screen.height * window.devicePixelRatio * -2
    }, 2000);
}
function leaveScrollHigher() {
    $('body,html').animate({
        scrollTop: window.screen.height * window.devicePixelRatio * 1.6
    }, 1000);
}

function redirectLower() {
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');
    lastRedirect = currentLocation; // 1 or 0
    localStorage.setItem('LastRedirect', JSON.stringify(lastRedirect));
    leaveScrollHigher();
}
function redirectHigher() {
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');
    lastRedirect = currentLocation; // 1 or 0
    localStorage.setItem('LastRedirect', JSON.stringify(lastRedirect));
    leaveScrollLower();
}

$(document).ready(() => {
    console.log(currentLocation)
    if (localStorage.getItem("LastRedirect") === null) {
        retrievedObject = 8;
    } else if(JSON.parse(retrievedObject) > currentLocation) {
        console.log(retrievedObject);
        loadScrollLower();
    } else if(JSON.parse(retrievedObject) < currentLocation) {
        console.log(retrievedObject);
        loadScrollHigher();
    }

    $('#home').on("click", function(){
        if($(this).index()+1 < currentLocation) {    // Wenns lower ist = Nach oben
            redirectHigher();
            setTimeout(function() {
                window.location.href = window.location.origin;
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            console.log($(this).index()+1);
            return;
        } if($(this).index()+1 > currentLocation) {
            console.log($(this).index()+1);
            redirectLower();
            setTimeout(function() {
                window.location.href = window.location.origin;
            }, 1000);
        }
    });

    $('#about').on("click", function(){
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            console.log($(this).index()+1);
            redirectHigher();
            setTimeout(function() {
                window.location.href = "./about.html";
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            console.log($(this).index()+1);
            return;
        } if($(this).index()+1 > currentLocation) {
            console.log($(this).index()+1);
            redirectLower();
            setTimeout(function() {
                window.location.href = "./about.html";
            }, 1000);
        }
    });

    $('#programming').on("click", function(){
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            console.log($(this).index()+1);
            redirectHigher();
            setTimeout(function() {
                window.location.href = "./skills.html";
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            console.log($(this).index()+1);
            redirectLower();
            setTimeout(function() {
                window.location.href = "./skills.html";
            }, 1000);
        }
    });

    $('#tools').on("click", function(){
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            console.log($(this).index()+1);
            redirectHigher();
            setTimeout(function() {
                window.location.href = "./tools.html";
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            console.log($(this).index()+1);
            redirectLower();
            setTimeout(function() {
                window.location.href = "./tools.html";
            }, 1000);
        }
    });

    $('#gear').on("click", function(){
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
            setTimeout(function() {
                window.location.href = "./gear.html";
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
            setTimeout(function() {
                window.location.href = "./gear.html";
            }, 1000);
        }
    });

    $('#projects').on("click", function(){
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
            setTimeout(function() {
                window.location.href = "./projects.html";
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
            setTimeout(function() {
                window.location.href = "./projects.html";
            }, 1000);
        }
    });

    $('#contact').on("click", function(){
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
            setTimeout(function() {
                window.location.href = "./contact.html";
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
            setTimeout(function() {
                window.location.href = "./contact.html";
            }, 1000);
        }
    });
});