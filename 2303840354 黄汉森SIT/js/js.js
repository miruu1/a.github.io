// JavaScript Document
var username = document.getElementById("username");
var password = document.getElementById("password");

var zimuletter = /[a-zA-Z]/g;

username.onfocus = function(){
	document.getElementById("ruleusername").style.display="block";
}
username.onblur = function(){
	document.getElementById("ruleusername").style.display="none";
	if(document.getElementById("zhanghaoisnull").classList.contains("valid") && document.getElementById("zhanghaolength").classList.contains("valid")){
		document.getElementById("username").style.borderColor="#016011";
		document.getElementById("l").classList.add("cc");
	}
}
username.onkeyup = function(){
	if(username.value==""){
		document.getElementById("zhanghaoisnull").classList.remove("valid");
		document.getElementById("zhanghaoisnull").classList.add("invalid");
	}else{
		document.getElementById("zhanghaoisnull").classList.add("valid");
		document.getElementById("zhanghaoisnull").classList.remove("invalid");
	}
	if(username.value.match(zimuletter)){
		document.getElementById("zhanghaoiszimu").classList.remove("valid");
		document.getElementById("zhanghaoiszimu").classList.add("invalid");
	}else{
		document.getElementById("zhanghaoiszimu").classList.add("valid");
		document.getElementById("zhanghaoiszimu").classList.remove("invalid");
	}
	
	if(username.value.length>=11){
		document.getElementById("zhanghaolength").classList.add("valid");
		document.getElementById("zhanghaolength").classList.remove("invalid");
	}else{
		document.getElementById("zhanghaolength").classList.remove("valid");
		document.getElementById("zhanghaolength").classList.add("invalid");
	}
}

password.onfocus = function(){
	document.getElementById("rulepassword").style.display="block";
}
password.onblur = function(){
	document.getElementById("rulepassword").style.display="none";
	if(document.getElementById("mimaisnull").classList.contains("valid") && document.getElementById("mimalength").classList.contains("valid")){
		document.getElementById("password").style.borderColor="#016011";
		document.getElementById("ll").classList.add("ccc");
	}
	
}
password.onkeyup = function(){
	if(password.value==""){
		document.getElementById("mimaisnull").classList.remove("valid");
		document.getElementById("mimaisnull").classList.add("invalid");
	}else{
		document.getElementById("mimaisnull").classList.add("valid");
		document.getElementById("mimaisnull").classList.remove("invalid");
	}
	if(password.value.length>=8){
		document.getElementById("mimalength").classList.add("valid");
		document.getElementById("mimalength").classList.remove("invalid");
	}else{
		document.getElementById("mimalength").classList.remove("valid");
		document.getElementById("mimalength").classList.add("invalid");
	}
}
function denglutiaozhuan() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username !== "12345678912" || password !== "88888888") {
        alert("账号密码不正确");
        return false;
    } else {
        window.open('https://www.taobao.com/', '_blank');
        return true; 
    }
}

function zhucetiaozhuan(){
	window.location.href = "./untitled1.html";
}

function left_function(){
	document.querySelector(".img_list").style.left=parseInt(window.getComputedStyle(document.querySelector(".img_list")).getPropertyValue('left'))+556+'px';
}
function right_function(){
	document.querySelector(".img_list").style.left=parseInt(window.getComputedStyle(document.querySelector(".img_list")).getPropertyValue('left'))-556+'px';
}




var f = document.querySelector(".fous");
var w = f.offsetWidth;
var i = document.querySelector(".img_list");
var index = 0;
var a = -556;
var timer

function start(){
	timer = setInterval(function(){
	index++;
	if(index%4==0){a=-a}
//	if(index>3){
//		index=0;
//	}
//	i.style.left=-(index*w)+'px';
	document.querySelector(".img_list").style.left=parseInt(window.getComputedStyle(document.querySelector(".img_list")).getPropertyValue('left'))+a+'px';
},3000)
}
start();

document.querySelector(".left").onmouseover = function(){
	clearInterval(timer);
}
document.querySelector(".left").onmouseout = function(){
	start();
}

setInterval(function(){
	document.querySelector(".gund").style.left=parseInt(window.getComputedStyle(document.querySelector(".gund")).getPropertyValue('left'))-10+'px';
},10)