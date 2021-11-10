var currentLocation;

var path = window.location.pathname;
var page = path.split("/").pop();


if(page == "index.html" || window.location.hostname === "codedotspirit.dev" || window.location.hostname === "codedotspirit.pages.dev") {
    currentLocation = 1;
} if(page == "about.html" && window.location.hostname === "codedotspirit.dev" || window.location.hostname === "codedotspirit.pages.dev") {
    currentLocation = 2;
} if(page == "skills.html" && window.location.hostname === "codedotspirit.dev" || window.location.hostname === "codedotspirit.pages.dev") {
    currentLocation = 3;
} if(page == "tools.html" && window.location.hostname === "codedotspirit.dev" || window.location.hostname === "codedotspirit.pages.dev") {
    currentLocation = 4;
} if(page == "gear.html" && window.location.hostname === "codedotspirit.dev" || window.location.hostname === "codedotspirit.pages.dev") {
    currentLocation = 5;
} if(page == "projects.html" && window.location.hostname === "codedotspirit.dev" || window.location.hostname === "codedotspirit.pages.dev") {
    currentLocation = 6;
} if(page == "contact.html" && window.location.hostname === "codedotspirit.dev" || window.location.hostname === "codedotspirit.pages.dev") {
    currentLocation = 7;
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
    lastRedirect = 0; // 1 or 0
    localStorage.setItem('LastRedirect', JSON.stringify(lastRedirect));
    leaveScrollHigher();
}
function redirectHigher() {
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');
    lastRedirect = 1; // 1 or 0
    localStorage.setItem('LastRedirect', JSON.stringify(lastRedirect));
    leaveScrollLower();
}

$(document).ready(() => {
    console.log(currentLocation)
    if (localStorage.getItem("LastRedirect") === null) {
        retrievedObject = 0;
    }
    if(JSON.parse(retrievedObject) == 1) {
        console.log(retrievedObject);
        loadScrollHigher();
    } else {
        console.log(retrievedObject);
        loadScrollHigher();
    }

    $('#home').on("click", function(){
        if($(this).index()+1 < currentLocation) {    // Wenns lower ist = Nach oben
            console.log($(this).index()+1);
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
//Check for nth-child number for current element, then check if Number of clicked element is higher or lower
//(https://developer.mozilla.org/de/docs/Web/CSS/:nth-child, https://stackoverflow.com/questions/10547261/get-the-nth-child-number-of-an-element-in-jquery)