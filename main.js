let user = null;
axios.post("https://rbclub-server.onrender.com/api/auth/me",{},{withCredentials:true})
.then(res=>{
	if(res.status === 200){
		const profileComponent = document.createElement("li");
		const Link = document.createElement("a");
		Link.className = "li-btn";
		Link.id = "nav-btn";
		Link.href = "https://dashboard.roboticsclubnitte.com";
		profileComponent.appendChild(Link);
		Link.innerHTML="Profile";	
		const navList = document.getElementById("nav-list");
		navList.appendChild(profileComponent);
	}
})
.catch(error=>{
		const profileComponent = document.createElement("li");
		const Link = document.createElement("a");
		Link.className = "li-btn";
		Link.id = "nav-btn";
     	Link.href = "https://dashboard.roboticsclubnitte.com";
		profileComponent.appendChild(Link);
		Link.innerHTML="Login/Register";
		const navList = document.getElementById("nav-list");
		navList.appendChild(profileComponent);
})
