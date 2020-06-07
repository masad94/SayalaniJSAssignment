//Task 01
var multiarr=[[]];

//Task 02
var multiarr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];

//Task 03
for(i=1;i<=10;i++){
    document.write(i+"<br>");
}

//Task 04
var table=parseInt(prompt("Enter a number to show its multiplication table"));
var length=parseInt(prompt("Enter length of table"));
document.write("Multiplication table of "+table);
document.write("<br>Length "+length+"<br>");
for(i=1;i<=length;i++)
{
    document.write("<br>"+table+" x "+i+" = "+table*i);
}

//Task 05
    var fruits=["apple","banana","mango","orange","strawberry"];
    for(i=0;i<fruits.length;i++){
        document.write(fruits[i]+"<br>");
    }

    for(i=0;i<fruits.length;i++){
        document.write("<br>Element at index "+i+" is "+fruits[i]);
    }

//Task 06
//a
document.write("Counting: ");
for(i=1;i<=15;i++){
    document.write(i+",");
}
//b
document.write("<br>Reverse Counting: ");
for(i=10;i>=1;i--){
    document.write(i+",");
}
//c
document.write("<br>Even:");
for(i=0;i<=20;i+=2){
    document.write(i+",");
}
//d
document.write("<br>Odd: ");
for(i=1;i<=20;i+=2){
    document.write(i+",");
}
//e
document.write("<br>Series: ");
for(i=2;i<=20;i+=2){
    document.write(i+"k,");
}

//Task 07
var A=["cake","apple pie","cookie","chips","patties"];
var input=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(i=0;i<A.length;i++){
    if(A[i]===input){
        document.write(input+" is avialable at index "+i+" in our bakery");
        break;
    }
    else if(i==A.length-1){
        document.write(input+" is not avialable in our bakery");
    }   
}

//Task 08
var A = [24, 53, 78, 91, 12];
document.write("Array items: "+A);
var largest= 0;

for (i=0; i<=largest;i++){
    if (A[i]>largest) {
        var largest=A[i];
    }
}
document.write("<br>The largest number is "+largest);

//Task 09
var A = [24, 53, 78, 91, 12];
document.write("Array items: "+A);
var smallest = A[0];
for (i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}
document.write("<br>The smallest number is "+smallest);

//Task 10
for(i=1;i<=100;i++){
    if(i%5==0){
    document.write(i+",");
    }
}