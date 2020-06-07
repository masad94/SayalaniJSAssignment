//Task 01
var val=10;
document.write("Result:");
document.write("<br>The value of a is: "+val);
document.write("<br>...............................");

document.write("<br>The value of ++a is: "+(++val));
document.write("<br>Now the value of a is: "+val);


document.write("<br>The value of a++ is: "+(val++));
document.write("<br>Now the value of a is: "+val);


document.write("<br>The value of --a is: "+(--val));
document.write("<br>Now the value of a is: "+val);


document.write("<br>The value of a-- is: "+(val--));
document.write("<br>Now the value of a is: "+val);

//Task 02
var a=2,b=1;
var result = --a - --b + ++b + b--; 
//            1 -   0  + 1   +  1;
document.write("a is "+a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);

//Task 03
var name=prompt("Enter Your name");
document.write("Welcome "+name);


//Task 04
var no=parseInt(prompt("Enter number",5));
document.write("Table of "+ no);
document.write("<br> "+no+ "x1= "+no*1);
document.write("<br> "+no+ "x2= "+no*2);
document.write("<br> "+no+ "x3= "+no*3);
document.write("<br> "+no+ "x4= "+no*4);
document.write("<br> "+no+ "x5= "+no*5);
document.write("<br> "+no+ "x6= "+no*6);
document.write("<br> "+no+ "x7= "+no*7);
document.write("<br> "+no+ "x8= "+no*8);
document.write("<br> "+no+ "x9= "+no*9);
document.write("<br> "+no+ "x10= "+no*10);

//Task 05
var sub1=prompt("Enter Subject Name");
var sub2=prompt("Enter Subject Name");
var sub3=prompt("Enter Subject Name");
var subTotal=100;
var obt1=parseInt(prompt("Enter 1st Subject obtained Marks"));
var obt2=parseInt(prompt("Enter 2nd Subject obtained Marks"));
var obt3=parseInt(prompt("Enter 3rd Subject obtaned Marks"));
var totalMarks=subTotal+subTotal+subTotal;
var obtainedMarks=obt1+obt2+obt3;
var percent=obtainedMarks/totalMarks*100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>"+sub1+"</td><td>"+subTotal+"</td><td>"+obt1+"</td><td>"+(obt1/subTotal*100)+"%</td></tr>");
document.write("<tr><td>"+sub2+"</td><td>"+subTotal+"</td><td>"+obt2+"</td><td>"+(obt2/subTotal*100)+"%</td></tr>");
document.write("<tr><td>"+sub3+"</td><td>"+subTotal+"</td><td>"+obt3+"</td><td>"+(obt3/subTotal*100)+"%</td></tr>");
document.write("<tr><td> </td><td>"+totalMarks+"</td><td>"+obtainedMarks+"</td><td>"+percent+"%</td></tr></table>");