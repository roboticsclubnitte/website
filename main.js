let user = null;
axios
  .post(
    "https://rbclub-server.onrender.com/api/auth/me",
    {},
    { withCredentials: true }
  )
  .then((res) => {
    if (res.status === 200) {
      var head = document.getElementById("head");
      var button = document.getElementById("button_1");
      var buttonlink = button.getElementsByTagName("a");
      var content = document.getElementById("content");
      const profileComponent = document.createElement("li");
      const Link = document.createElement("a");
      Link.className = "li-btn";
      Link.id = "nav-btn";
      profileComponent.appendChild(Link);
      profileComponent.addEventListener("click", login);
      Link.innerHTML = "Profile";
      const navList = document.getElementById("nav-list");
      navList.appendChild(profileComponent);
      content.textContent =
        " Club designs, builds, and creates bots. Conducts workshops on Bot building, IoT, 3D modeling, and Programming. Works on diverse projects.";
      if (res.data.user.PaymentStatus === "RECEIVED") {
        buttonlink.href = "https://dashboard.roboticsclubnitte.com";
        head.textContent = "View Your Dashbord By Clicking below";
        button.textContent = "Dasboard";
      } else {
        buttonlink.href = "#about";
        head.textContent = "Get Kown More About Us";
        button.textContent = "GET KOWN US";
        alert("Payment not verified!");
      }
    }
  })
  .catch((error) => {
    const profileComponent = document.createElement("li");
    const Link = document.createElement("a");
    Link.className = "li-btn";
    Link.id = "nav-btn";
    profileComponent.appendChild(Link);
    Link.innerHTML = "Login/Register";
    profileComponent.addEventListener("click", login);
    const navList = document.getElementById("nav-list");
    navList.appendChild(profileComponent);
    console.log(error);
  });
function login() {
  axios
    .post(
      "https://rbclub-server.onrender.com/api/auth/register",
      {},
      { withCredentials: true }
    )
    .then((result) => {
      if (result.data.message === "success") {
        window.location.replace(result.data.authUrl);
      }
    })
    .catch((error) => {
      console.log(error);
    });
}
