//Task 01
var city=prompt("Enter City Name");
if(city==="Karachi")
{
    document.write("Welcome to city of lights");
}

//Task 02
var gender=prompt("Enter your gender");
if(gender==="male")
{
    document.write("Good Morning Sir");
}
else if( gender==="female")
{
    document.write("Good Morning Ma'am");
}

//Task 03
var color=prompt("Enter color of road traffic signal");
if(color==="red"){
    document.write("Must Stop");
}
else if(color==="yellow"){
    document.write("Ready to Move");
}
else if(color==="green"){
    document.write("Move now");
}

//Task 04
var fuel=parseFloat(prompt("Enter remaining fuel quantity in litres"));
if(fuel<0.25){
    document.write("Please refill the fuel in your car");   
}

//Task 05
//a. alert displayed
//b. alert not displayed
//c. condition 2 and condition 4 alert displayed
//d. "The cost equals" alert displayed
//e. "True" alert displayed
//f. "car is smaller than cat" alert displayed

//Task 06
var sub1=parseInt(prompt("Enter your 1st subject marks"));
var sub2=parseInt(prompt("Enter your 2nd subject marks"));
var sub3=parseInt(prompt("Enter your 3rd subject marks"));
var total=parseInt(prompt("Enter Total Marks"));
var obtainedMarks=sub1+sub2+sub3;
var percent=obtainedMarks/total*100;
document.write("<h2>Marks Sheet</h2><br><br>");
if(percent>=80)
{
    document.write("<br>Total Marks: "+total);
    document.write("<br>Marks Obtained: "+obtainedMarks);
    document.write("<br>Percentage: "+percent+"%");
    document.write("<br>Grade: A-one");
    document.write("<br>Remarks: Excellent");
}
else if(percent>=70&&percent<80)
{
    document.write("<br>Total Marks: "+total);
    document.write("<br>Marks Obtained: "+obtainedMarks);
    document.write("<br>Percentage: "+percent+"%");
    document.write("<br>Grade: A");
    document.write("<br>Remarks: Good");
}
else if(percent>=60&&percent<70)
{
    document.write("<br>Total Marks: "+total);
    document.write("<br>Marks Obtained: "+obtainedMarks);
    document.write("<br>Percentage: "+percent+"%");
    document.write("<br>Grade: B");
    document.write("<br>Remarks: You need to improve");
}
else if(percent<60)
{
    document.write("<br>Total Marks: "+total);
    document.write("<br>Marks Obtained: "+obtainedMarks);
    document.write("<br>Percentage: "+percent+"%");
    document.write("<br>Grade: Fail");
    document.write("<br>Remarks: Sorry");
}

//Task 07
var num=6;
var guess=parseInt(prompt("Enter your guess (ranging from 1 to 10)"));
if(num===guess)
{
    document.write("Bingo! Correct answer");
}
else if(num===guess+1){
    document.write("Close enough to the correct answer");
}

//Task 08
var num=parseInt(prompt("Enter a number"));
if(num%3===0)
{
    document.write("Number is divisible by 3");
}

//Task 09
var num=parseInt(prompt("Enter a number"));
if(num%2===0){
    document.write("Number is even");
}
else{
    document.write("Number is odd");
}

//Task 10
var temp=parseInt(prompt("Enter temprature"));
if(temp>40){
    document.write("It's too hot outside.");
}
else if(temp>30&&temp<=40){
    document.write("The weather today is Normal");
}
else if(temp>20&&temp<=30){
    document.write("Today's weather is cool.");
}
else if(temp>10&&temp<=20){
    document.write("OMG! Today's weather is so cool.");
}

//Task 11
var num1=parseInt(prompt("Enter 1st number"));
var num2=parseInt(prompt("Enter 2nd number"));
var op=prompt("Enter operation you want to perform");
if(op==='+'){
    document.write(num1+num2);
}
else if(op==='-')
{
    document.write(num1-num2);
}
else if(op==='*')
{
    document.write(num1*num2);
}
else if(op==='/')
{
    document.write(num1/num2);
}
else if(op==='%')
{
    document.write(num1%num2);
}