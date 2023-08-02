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
      var button = document.getElementById("button");
      var content = document.getElementById("content");
      const profileComponent = document.createElement("li");
      const Link = document.createElement("a");
      Link.className = "li-btn";
      Link.id = "nav-btn";
      Link.href = "https://dashboard.roboticsclubnitte.com";
      profileComponent.appendChild(Link);
      Link.innerHTML = "Profile";
      const navList = document.getElementById("nav-list");
      navList.appendChild(profileComponent);
      content.textContent =
        " Club designs, builds, and creates bots. Conducts workshops on Bot building, IoT, 3D modeling, and Programming. Works on diverse projects.";
      head.textContent = "View Your Dashbord By Clicking below";
      button.textContent = "Dasboard";
    }
  })
  .catch((error) => {
    const profileComponent = document.createElement("li");
    const Link = document.createElement("a");
    Link.className = "li-btn";
    Link.id = "nav-btn";
    Link.href = "https://dashboard.roboticsclubnitte.com";
    profileComponent.appendChild(Link);
    Link.innerHTML = "Login/Register";
    const navList = document.getElementById("nav-list");
    navList.appendChild(profileComponent);
  });
