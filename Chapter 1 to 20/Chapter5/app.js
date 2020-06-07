//Task 01
var val1=parseInt(prompt("Enter 1st Value"));
var val2=parseInt(prompt("Enter 2nd Value"));
var sum=val1+val2;
document.write("Sum of "+val1 + " and "+val2 +" is "+ sum);

//Task02
var val1=parseInt(prompt("Enter 1st Value"));
var val2=parseInt(prompt("Enter 2nd Value"));
var difference=val1-val2;
document.write("Difference of "+val1 + " and "+val2 +" is "+ difference);

var val1=parseInt(prompt("Enter 1st Value"));
var val2=parseInt(prompt("Enter 2nd Value"));
var divide=val1/val2;
document.write("Division of "+val1 + " by "+val2 +" is "+ divide);

var val1=parseInt(prompt("Enter 1st Value"));
var val2=parseInt(prompt("Enter 2nd Value"));
var product=val1*val2;
document.write("Product of "+val1 + " and "+val2 +" is "+ product);

//Task 03
var value;
document.write("<br>Value after variable declaration is: "+value);
value=45;
document.write("<br>Initial value: "+value);
++value;
document.write("<br>Value after incremnt is: ",value);
value+=7;
document.write("<br>Value after addition is: "+value);
--value;
document.write("<br>Value after decrement is: "+value);
value%=3;
document.write("<br>The remainder is: "+value);

//Task 04
var cost=600;
var totalCost=5*cost;
document.write("Total cost to buy 5 tickets to a movie is "+totalCost+ " PKR");


var cost=parseInt(prompt("Enter price of ticket:"));
var noOfTickets=parseInt(prompt("Enter No. of tickets: "));
var totalCost=noOfTickets*cost;
document.write("Total cost to buy "+noOfTickets+ " tickets to a movie is "+totalCost+ " PKR");

//Task 05
var no=4;
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

//Task 06
var tempC=45;
var tempF= (tempC*9/5)+32;
document.write("<br>"+tempC+"oC is " +tempF+"oF");
tempC=(tempF-32)*5/9;
document.write("<br>"+tempF+"oF is " +tempC+"oC");

//Task 07
var item1=25;
var item2=30
var quant1=5;
var quant2=3;
var shippingCharges=100;
document.write("<h1>Shopping Cart</h1><br><br>");
document.write("<br>Price of 1st item is "+item1);
document.write("<br>Quantity of 1st item is "+quant1);
document.write("<br>Price of 2nd item is "+item2);
document.write("<br>Quantity of 2nd item is "+quant2);
document.write("<br>Shipping Charges "+shippingCharges);
document.write("<br><br>Total cost of your order is "+((item1*quant1)+(item2*quant2)+shippingCharges))



//Task 08
var totalMarks=980;
var obtainedMarks=804;
var percent=obtainedMarks/totalMarks*100;
document.write("<h1>Marks Sheet</h1><br><br>");
document.write("<br>Total Marks: "+totalMarks);
document.write("<br>Marks Obtained: "+obtainedMarks);
document.write("<br>Percentage: "+percent);

//Task 09
var dollar=10;
var riyals=25;
var currency=(10*104.80)+(25*28);
document.write("<h1>Currency in PKR</h1><br><br>")
document.write("<br>Total Currency in PKR: "+currency);

//Task 10
var num=20;
num=((num+5)*10)/2; 

//Task 11
var currentYear=2020;
var birthYear=1993;
var age=currentYear-birthYear;
document.write("<h1>Age Calculator</h1><br><br>");
document.write("<br>Current Year: "+currentYear);
document.write("<br>Birth Year: "+birthYear);
document.write("<br>Your Age is: "+age);

//Task 12
var r=20;
var pi=3.142;
var c=2*pi*r;
var area=pi*(r**2);
document.write("<h1>The Geometrizer</h1><br><br>");
document.write("<br>Radius of circle: "+r);
document.write("<br>The circumference is: "+c);
document.write("<br>The area is: "+area);

//Task 13
var snack="choclate chip";
var currentAge=15;
var maxAge=65;
var est=3;
var total=(maxAge-currentAge)*est;
document.write("<h1>The Lifetime Supply Calculator</h1><br><br>");
document.write("<br>Favourite Snack: "+snack);
document.write("<br>Current Age: "+currentAge);
document.write("<br>Estimated Maximum Age: "+maxAge);
document.write("<br>Amount of snacks per day: "+est);
document.write("<br>You will need "+total +" to last you until the ripe old age of "+maxAge);
