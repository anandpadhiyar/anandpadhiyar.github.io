function checkPwd(){
	var cpwd = "Rsk22@%&";
	var pwd = document.getElementById("pwd").value;
	if(cpwd == pwd)
		window.location.href="html/home.html";
	else
		alert("Password is not correct");
	return false;
}