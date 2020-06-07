//Task 01
var arr=[];

//Task 02
var arr=new Array();

//Task 03
var strarr=["Asad","Usman","Akmal"];

//Task 04
var numarr=[3,5,6];

//Task 05
var boolarr=[true,false];

//Task 06
var mixarr=["Hello",45,true];

//Task 07
var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil.","PhD"];
document.write("Qualifications:<br>");
document.write("<br>1) "+qual[0]);
document.write("<br>2) "+qual[1]);
document.write("<br>3) "+qual[2]);
document.write("<br>4) "+qual[3]);
document.write("<br>5) "+qual[4]);
document.write("<br>6) "+qual[5]);  
document.write("<br>7) "+qual[6]);
document.write("<br>8) "+qual[7]);

//Task 08
var students=["Ahmed","Ali","Usman"];
var marks=[360,269,300];
document.write("Score of "+students[0]+" is "+marks[0]+". Percentage: "+(marks[0]/500*100)+"%");
document.write("<br>Score of "+students[1]+" is "+marks[1]+". Percentage: "+(marks[1]/500*100)+"%");
document.write("<br>Score of "+students[2]+" is "+marks[2]+". Percentage: "+(marks[2]/500*100)+"%");

//Task 09
var colors=["red","green","blue"];
document.write(colors);
console.log(colors);
//a
var newcolor=prompt("Enter the color which you want to add at start of array");
colors.unshift(newcolor);
document.write("<br>"+colors);
//b
var newcolor=prompt("Enter the color which you want to add at end of array");
colors.push(newcolor);
document.write("<br>"+colors);
//c
colors.unshift("black","brown");
document.write("<br>"+colors);
//d
colors.shift();
document.write("<br>"+colors);
//e
colors.pop();
document.write("<br>"+colors);
//f
var index=parseInt(prompt("On which index you want to enter color?"));
var newcolor=prompt("Enter the color which you want to add at array:");
colors.splice(index,0,newcolor);
document.write("<br>"+colors);
//g
var index=parseInt(prompt("From which index you want to Delete colors?"));
var del=parseInt(prompt("How many colors you want to delete?"));
colors.splice(index,del);
document.write("<br>"+colors);

//Task 10
var marks=[450,389,444,124];
document.write("Score of Students: "+marks);
document.write("<br>Ordered Score of Students: "+marks.sort( function(a, b) {return a-b}));


//Task 11
var cities=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var selectedCities=cities.slice(2,4);
document.write("Cities List:<br>"+cities);
document.write("<br>Selected Cities List:<br>"+selectedCities);

//Task 12
var arr = ["This", "is", "my", "cat"]; 
document.write(arr.join(" "));

//Task 13
var devices=["Keyboard","Mouse","Printer","Monitor"];
document.write("Devices:<br>"+devices);
document.write("Out:<br>"+devices.shift());
document.write("Out:<br>"+devices.shift());
document.write("Out:<br>"+devices.shift());
document.write("Out:<br>"+devices.shift());

//Task 14
var devices=["Keyboard","Mouse","Printer","Monitor"];
document.write("Devices:<br>"+devices);
document.write("Out:<br>"+devices.pop());
document.write("Out:<br>"+devices.pop());
document.write("Out:<br>"+devices.pop());
document.write("Out:<br>"+devices.pop());

//Task 15
var mobile=["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<form><select><option>"+mobile[0]+"</option><option>"+mobile[1]+"</option><option>"+mobile[2]+"</option><option>"+mobile[3]+"</option><option>"+mobile[4]+"</option><option>"+mobile[5]+"</option></select></form>");
