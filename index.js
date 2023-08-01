var check = document.getElementById("check");
var icon = document.getElementById("menu-img");
var nav_list = document.getElementById("menu");
var nav = document.getElementById("nav");
const Logged = window.localStorage.getItem("Logged");
function changeIcon() {
  if (check.checked == true) {
    icon.src = "Images/Exit.png";
    menu.style.left == "0%";
  }
  if (check.checked == false) {
    icon.src = "Images/Menu Icon.png";
    menu.style.left == "-110%";
  }
}
function hide() {
  menu.style.left == "-110%";
  check.checked = false;
  icon.src = "Images/Menu Icon.png";
}
window.onscroll = function () {
  scrollFunction();
};

window.onload = function () {
  var achor = document.getElementById("Login_btn");
  var text = achor.getElementsByTagName("a");
  var head = document.getElementById("head");
  var button = document.getElementById("button");
  var content = document.getElementById("content");
  let Logged = window.localStorage.getItem("Logged");
  console.log(Logged);
  if (Logged === "true") {
    // Use strict equality operator '==='
    text[0].innerHTML = "Profile";
    text[0].href = "clubpayment.vercel.app";
    console.log(content.innerText);
    content.innerText =
      " Club designs, builds, and creates bots. Conducts workshops on Bot building, IoT, 3D modeling, and Programming. Works on diverse projects.";
    head.textContent = "View Your Dashbord By Clicking below";
    button.textContent = "Dasboard";
    setTimeout(() => {
      text[0].innerHTML = "Login";
      text[0].href = "clubpayment.vercel.app/Login";
      window.localStorage.setItem("Logged", "false"); 
      Logged = "false"; 
      console.log(Logged);
      content.innerText =
    "Welcome to the Club of Innovation and Technology: Where Designs, Bots, IoT, 3D Modeling, and Programming Merge to Inspire Diverse Projects and Fuel Your Creative Exploration!";
      head.textContent = "Register now and be the part of our club!";
    button.textContent = "Register Now";
    }, 1800000);
  } else {
    // const head=document.createElement("h1")
    // head.innerHTML="Register now and be the part of our team!"
    // const Button=document.createElement("a");
    // Button.innerHTML="Register now"
    // Button.href="https://docs.google.com/forms/d/e/1FAIpQLSfqHkKp3CIM-TCRWm6MDmPz7nfsS9ZHuzXd7J5uW3QzgvJG-g/viewform?usp=sf_link"
    // Button.className="btn-home"
    // const v=document.getElementById("name")
    // v.appendChild(head)
    // const r=document.getElementById("button")
    // r.appendChild(Button)
    content.innerText =
    "Welcome to the Club of Innovation and Technology: Where Designs, Bots, IoT, 3D Modeling, and Programming Merge to Inspire Diverse Projects and Fuel Your Creative Exploration!";
    head.textContent = "Register now and be the part of our club!";
    button.textContent = "Register Now";
  }
};
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("nav").style.backgroundColor = "#fff";
    document.getElementById("nav").style.top = "0";
    document.getElementById("logo-p").style.color = "#194d82";
    document.getElementById("nav").style.borderBottom = "2px solid #194d82";
    document.getElementById("logo-img").src = "Images/Logo_color.png";
    var elms = document.querySelectorAll("[id='nav-btn']");

    for (var i = 0; i < elms.length; i++) elms[i].style.color = "#194d82";

    const element = document.querySelectorAll(".li-btn");
    for (var i = 0; i < element.length; i++)
      element[i].style.setProperty("--check-primary", "#194d82");
  } else {
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.getElementById("logo-p").style.color = "#000";
    document.getElementById("logo-img").src = "Images/White Logo.png";
    document.getElementById("nav").style.borderBottom = "none";
    document.getElementById("nav-btn").style.color = "#fff";
    var elms = document.querySelectorAll("[id='nav-btn']");
    document.getElementById("nav").style.top = "auto";

    for (var i = 0; i < elms.length; i++) elms[i].style.color = "#fff";
    const element = document.querySelectorAll(".li-btn");
    for (var i = 0; i < element.length; i++)
      element[i].style.setProperty("--check-primary", "#fff");
  }
  var mq = window.matchMedia("(max-width: 768px)");
  if (mq.matches) {
    document.getElementById("nav").style.backgroundColor = "transparent";
    document.getElementById("logo-p").style.color = "#fff";
    document.getElementById("logo-img").src = "Images/White Logo.png";
    document.getElementById("nav").style.borderBottom = "none";
    document.getElementById("nav-btn").style.color = "#fff";
    var elms = document.querySelectorAll("[id='nav-btn']");

    for (var i = 0; i < elms.length; i++) elms[i].style.color = "#fff";
    const element = document.querySelectorAll(".li-btn");
    for (var i = 0; i < element.length; i++)
      element[i].style.setProperty("--check-primary", "#fff");
    document.getElementById("nav").style.position = "absolute";
  } else {
  }
  // window width is greater than 570px
}
