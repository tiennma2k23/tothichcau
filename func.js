﻿var clicksound= new Audio();
clicksound.src= "sound/whoosh.mp3";
function clicked(str){
	let x1=Math.ceil(Math.random()*40);
	let x2=Math.ceil(Math.random()*40);
	let x3=Math.ceil(Math.random()*40);
	let x4=Math.ceil(Math.random()*40);
	document.getElementById(str).style.left=x1+"%";
	document.getElementById(str).style.right=x2+"%";
	document.getElementById(str).style.top=x3+"%";
	document.getElementById(str).style.bottom=x4+"%";
	clicksound.play();
}
function click_link() {
	window.alert("Hihi tớ cx iu cậu nhắmmmmmm !!!");
	window.open("https://www.facebook.com/mkhonglui.1918/","_self")
}
