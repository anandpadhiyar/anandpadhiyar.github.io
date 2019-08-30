function checkPwd(){
	var cpwd = "Rsk22@%&";
	var pwd = document.getElementById("pwd").value;
	if(cpwd == pwd)
		window.location.href="html/HomePage.html";
	else
		alert("Password is not correct");
	return false;
}