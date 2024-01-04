var zimuletter = /[a-zA-Z]/g;
var username_zc = document.getElementById("username_zc");
var username_msg = document.getElementById("username_msg");
	
var email_zc = document.getElementById("email_zc");
var email_msg = document.getElementById("email_msg");

var password1_zc = document.getElementById("password1_zc");
var password1_msg = document.getElementById("password1_msg");

name_zc.onkeyup = function() {
    var inputValue = name_zc.value;
    var errorMessage = "";

    if (inputValue === "" || inputValue.match(zimuletter)) {
        errorMessage += "手机号格式不正确：不能为空/不能包含字母！<br>";
    }

    if (inputValue.length <= 3) {
        errorMessage += "用户至少需要三位";
    }

    if (errorMessage !== "") {
        name_msg.innerHTML = errorMessage;
        name_msg.style.color = "red";
    } else {
        name_msg.innerHTML = "";
		document.getElementById("ggggg").classList.add("fffff");
    }
};

email_zc.onkeyup = function() {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var emailValue = email_zc.value;
	var errorMessage = "";

    if (emailValue === "" || emailValue.match(emailPattern)) {
        errorMessage += "邮箱格式不正确";
    }

//    if (emailValue.length !== 11) {
//        errorMessage += "需要11位手";
//    }

    if (errorMessage !== "") {
        email_msg.innerHTML = errorMessage;
        email_msg.style.color = "red";
    } else {
        email_msg.innerHTML = "";
		document.getElementById("gg").classList.add("ff");
    }
};

username_zc.onkeyup = function() {
    var inputValue = username_zc.value;
    var errorMessage = "";

    if (inputValue === "" || inputValue.match(zimuletter)) {
        errorMessage += "手机号格式不正确：不能为空/不能包含字母！<br>";
    }

    if (inputValue.length !== 11) {
        errorMessage += "需要11位手机号码";
    }

    if (errorMessage !== "") {
        username_msg.innerHTML = errorMessage;
        username_msg.style.color = "red";
    } else {
        username_msg.innerHTML = "";
		document.getElementById("g").classList.add("f");
    }
};

email_zc.onkeyup = function() {
	var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	var emailValue = email_zc.value;
	var errorMessage = "";

    if (emailValue === "" || emailValue.match(emailPattern)) {
        errorMessage += "邮箱格式不正确";
    }

//    if (emailValue.length !== 11) {
//        errorMessage += "需要11位手";
//    }

    if (errorMessage !== "") {
        email_msg.innerHTML = errorMessage;
        email_msg.style.color = "red";
    } else {
        email_msg.innerHTML = "";
		document.getElementById("gg").classList.add("ff");
    }
};

password1_zc.onkeyup = function() {
    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    var passwordValue = password1_zc.value;
    var errorMessage = "";

    if (passwordValue === "" || !passwordValue.match(passwordPattern)) {
        errorMessage += "密码至少应包含一个字母和一个数字 <br>";
    }

    if (passwordValue.length < 8) {
        errorMessage += "长度至少为8个字符";
    }

    if (errorMessage !== "") {
        password1_msg.innerHTML = errorMessage;
        password1_msg.style.color = "red";
    } else {
        password1_msg.innerHTML = "";
		document.getElementById("ggg").classList.add("fff");
    }
};

document.getElementById("password2_zc").onkeyup = function(){
	if(document.getElementById("password1_zc").value!=document.getElementById("password2_zc").value){
   document.getElementById("password2_msg").innerHTML = "两次输入的密码不一致";
   document.getElementById("password2_msg").style.color = "red";
}else{
	document.getElementById("password2_msg").innerHTML = "";
	document.getElementById("gggg").classList.add("ffff");
}}

function st() {
    var username_msg = document.getElementById("username_msg").innerHTML;
    var email_msg = document.getElementById("email_msg").innerHTML;
    var password1_msg = document.getElementById("password1_msg").innerHTML;
    var password2_msg = document.getElementById("password2_msg").innerHTML;

    if (username_msg == "" && email_msg == "" && password1_msg == "" && password2_msg == "") {
		alert("注册成功");
		window.location.replace("./untitled.html");
        return true;
    } else {
        alert("请填写完整信息");
        return false;
    }
}


