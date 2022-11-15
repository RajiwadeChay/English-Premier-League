//var declarations
const body = document.querySelector("body");
//Saving default user details
const userEmail = "user1@gmail.com";
const userPswd = "User0001";

//function declaration 
//Preventing site from going back to login page
function preventBack() {
    window.history.forward();
}
setTimeout(preventBack(), 0);
window.onunload = function () { null };

function checkIsLoggedIn() {
    let isLoggedIN = localStorage.getItem('isLoggedIN') ? localStorage.getItem('isLoggedIN') : '';
    //for checking user is logged in or not
    if (isLoggedIN != 'true') {
        location.href = "English-Premier-League/../login.html";
    } 
    // else if (isLoggedIN != '') {
    //     location.href = "English-Premier-League/../index.html";
    // }
}

//condition for selecting which page js should work
if (body.classList.contains("home-page")) {
    homePageJS();
} else if (body.classList.contains("login-page")) {
    loginPageJS();
} else if (body.classList.contains("clubs-page")) {
    clubsPageJS();
} else if (body.classList.contains("match-details-page")) {
    matchDetailsPageJS();
}

function loginPageJS() {
    // checkIsLoggedIn();
    let form = document.getElementsByName("form");
    let email = document.getElementById("email");
    let pswd = document.getElementById("pswd");
}

function homePageJS() {
    checkIsLoggedIn();
}

function clubsPageJS() {
    checkIsLoggedIn();
}

function matchDetailsPageJS() {
    checkIsLoggedIn();
}