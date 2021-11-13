var currentLocation;

var path = window.location.pathname;
var page = path.split("/").pop();

//Letzte Page als Session Storage

if(page == "about.html" || page == "about") {
    currentLocation = 2;
} else if(page == "skills.html" || page == "skills") {
    currentLocation = 3;
} else if(page == "tools.html" || page == "tools") {
    currentLocation = 4;
} else if(page == "gear.html" || page == "gear") {
    currentLocation = 5;
} else if(page == "projects.html" || page == "projects") {
    currentLocation = 6;
} else if(page == "contact.html" || page == "contact") {
    currentLocation = 7;
} else {
    currentLocation = 1;
}

var lastRedirect; // 1 or 0
var retrievedObject = sessionStorage.getItem('LastRedirect');

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
    sessionStorage.setItem('LastRedirect', JSON.stringify(lastRedirect));
    setTimeout(() => {
        leaveScrollHigher();
    }, 300); 
}
function redirectHigher() {
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');
    lastRedirect = currentLocation; // 1 or 0
    sessionStorage.setItem('LastRedirect', JSON.stringify(lastRedirect));
    setTimeout(() => {
        leaveScrollLower();
    }, 300);
}

$(document).ready(() => {
    if(currentLocation == 1) {
        loadScrollHigher();
    } else {
        if (sessionStorage.getItem("LastRedirect") === null) {
            retrievedObject = 8;
        } else if(parseInt(retrievedObject) > currentLocation) {
            loadScrollHigher();
        } else if(parseInt(retrievedObject) < currentLocation) {
            loadScrollLower();
        }
    }
    

    $('#home').on("click", function(){
        if($(this).index()+1 < currentLocation) {    // Wenns lower ist = Nach oben
            console.log($(this).index()+1);
            redirectHigher();
            setTimeout(function() {
                window.location.href = "./index.html";
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            console.log($(this).index()+1);
            redirectLower();
            setTimeout(function() {
                window.location.href = "./index.html";
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
            redirectHigher();
            setTimeout(function() {
                window.location.href = "./skills.html";
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
            setTimeout(function() {
                window.location.href = "./skills.html";
            }, 1000);
        }
    });

    $('#tools').on("click", function(){
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
            setTimeout(function() {
                window.location.href = "./tools.html";
            }, 1000);
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
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