alert("Welcome to Eumene's Portfolio!");

var n;
n = prompt("Please input your name or nickname");
if (n == null){
	prompt("Please enter your name or nickname please...")
} else {
	alert("Nice to meet you " + n + "! Welcome to SetUp!");
}

var age;
age = prompt("Please input your age");
let x = age;
let y = 20;
let z = x - y;
alert("fun fact! We have an age gap of " + Math.abs(z) + " years.");