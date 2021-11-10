var currentLocation;

var path = window.location.pathname;
var page = path.split("/").pop();

var redirectPath = "https://" + window.location.host + "/";


if(page == "index.html") {
    currentLocation = 1;
} if(page == "about.html") {
    currentLocation = 2;
} if(page == "skills.html") {
    currentLocation = 3;
} if(page == "tools.html") {
    currentLocation = 4;
} if(page == "gear.html") {
    currentLocation = 5;
} if(page == "projects.html") {
    currentLocation = 6;
} if(page == "contact.html") {
    currentLocation = 7;
}

var hrefLocation;
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
    lastRedirect = 0; // 1 or 0
    sessionStorage.setItem('LastRedirect', JSON.stringify(lastRedirect));
    leaveScrollHigher();
    setTimeout(function() {
        window.location.href = hrefLocation;
    }, 1000);
}
function redirectHigher() {
    var sec = document.getElementById('sec');
    sec.classList.toggle('active');
    lastRedirect = 1; // 1 or 0
    sessionStorage.setItem('LastRedirect', JSON.stringify(lastRedirect));
    leaveScrollLower();
    setTimeout(function() {
        window.location.href = hrefLocation;
    }, 1000);
}

$(document).ready(() => {
    console.log(redirectPath)
    if (sessionStorage.getItem("LastRedirect") === null) {
        retrievedObject = 0;

    }
    if(JSON.parse(retrievedObject) == 1) {
        loadScrollLower();
    } else {
        loadScrollHigher();
    }

    $('#home').on("click", function(){
        hrefLocation = redirectPath + "index.html";
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
        }
    });

    $('#about').on("click", function(){
        hrefLocation = redirectPath + "about.html";
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
        }
    });

    $('#programming').on("click", function(){
        hrefLocation = redirectPath + "skills.html";
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
        }
    });

    $('#tools').on("click", function(){
        hrefLocation = redirectPath + "tools.html";
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
        }
    });

    $('#gear').on("click", function(){
        hrefLocation = redirectPath + "gear.html";
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
        }
    });

    $('#projects').on("click", function(){
        hrefLocation = redirectPath + "projects.html";
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
        }
    });

    $('#contact').on("click", function(){
        hrefLocation = redirectPath + "contact.html";
        if($(this).index()+1 < currentLocation) {       // Wenns lower ist = Nach oben
            redirectHigher();
        } if($(this).index()+1 == currentLocation) {
            return;
        } if($(this).index()+1 > currentLocation) {
            redirectLower();
        }
    });
});
//Check for nth-child number for current element, then check if Number of clicked element is higher or lower
//(https://developer.mozilla.org/de/docs/Web/CSS/:nth-child, https://stackoverflow.com/questions/10547261/get-the-nth-child-number-of-an-element-in-jquery)