//Task 01
var input=prompt("Enter chracter");
if(!isNaN(input*1)){
    alert("Numeric chracter");
}
else{
    if (input == input.toUpperCase()) {
        alert ("Upper case chracter");
    }
    else if (input == input.toLowerCase()){
        alert ("Lower case character");
    }
}

//Task 02
var num1=parseInt(prompt("Enter 1st number"));
var num2=parseInt(prompt("Enter 2nd number"));
if(num1>num2){
    document.write(num1);
}
else if(num===num2){
    document.write(num1 +" and "+num+" are equal");
}
else{
    document.write(num2);
}

//Task 03
var num=parseInt(prompt("Enter a number"));
if(num<0){
    document.write("Number is negative");
}
else if(num>0){
    document.write("Number is positive");
}
else{
    document.write("Number is zero");
}

//Task 04
var char=prompt("Enter a single chracter");
if(char==='a'||char==='A'||char==='e'||char==='E'||char==='i'||char==='I'||char==='o'||char==='O'||char==='u'||char==='U'){
    document.write("Character is a vowel");
}
else{
    document.write("Character is not a vowel")
}

//Task 05
var pswd="hello";
var enter=prompt("Enter your password");
if(enter==='')
{
    alert("Please enter your password");
}
else{
    if(enter===pswd){
        alert("Correct! The password you entered matches the original password");
    }
    else{
        alert("Incorrect password");
    }
}

//Task 06
var greeting;
var hour = 13;
 if (hour < 18){
     greeting = "Good day";
 }
 else{
     greeting = "Good evening";
    }

//Task 07
var time=prompt("Enter time in 24-hour format",'1900');
if(time>='0000'&&time<'1200'){
    alert("Good Morning!");
}
else if(time>='1200'&&time<'1700'){
    alert("Good Afternoon!");
}
else if(time>='1700'&&time<'2100'){
    alert("Good Evening!");
}
else if(time>='2100'&&time<='2359'){
    alert("Good Night!");
}