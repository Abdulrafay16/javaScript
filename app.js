
// Variables

// x = "salam";
// document.write(x);

// var x = "Rafay"
// document.write(x)

// if  Else ifstatement

// if (1 >= 12){
//     alert("Good Morning");
// }else if (12 <= 11){
//     alert("Good evening");
// }else{
//     alert("Good Night")
// }


// Percentage Application

// var name = prompt("Enter your Name")
// var per = prompt("Please Enter your Percentage")
// if (per >= 80 && per <= 90){
//     alert(name + " " + "A Plus")
// }else if (per >= 70 && per <= 80){
//     alert( name + " " + "A Grade")
// }else if (per >= 60 && per <= 70){
//     alert(name + " " + "B Grade")
// }else if (per >= 50 && per <= 60){
//     alert(name + " " + "C Grade")
// }else if (per >= 40 && per <= 50){
//     alert(name + " " + "D Grade")
// }else if (per >= 33 && per <= 40){
//     alert(name + " " + "E Grade")
// }else{
//     alert(name + " " + "Please Enter your Percentage")
// };

// for loop1

//   for(var i =0; i<10; i++){
// agr equals ka signature  huga to 11 bar chley g
//  or agr nhi  huga to 10 bar chley  ga
//     document.write( 1 + i +") " +  "salam <br>" );
//   }

// for(var i= 5; i <=50; i =i+5){
//     console.log(i)
// }

//  for(var i= 50; i >=5; i=i-5){
//     console.log(i)
//  }

// Even Number

// for(var i= 0; i<10; i++){
//     if(i%2 ==0)
//     console.log(i)
// }

// For in loop

// let animal = {
//     name: "zebra",
//     leg: '4'
// };
// for(let key in animal){
//     console.log( key, animal[key])
// }


// let Men ={
//     name: ['abdul','rafay','ahsan'],
//     fname: ['shahid','ahmed','bilal']
// }
// for(let key in Men){
//      console.log(key, Men)
// }


// Nested Loop

//   for(var a = 1; a<= 100; a = a+10){ // <= outer loop Rows
//       for(var  b = a; b < a+10; b++){  // <= nested loop Colums
//         document.write(b + " ")
//       }
//       document.write("<br>")
//   }

// Example (1)

//  for(var a = 1; a<= 5; a++){
//     for(var  b = 1; b <= a; b++){
//         document.write(b + " ")
//     }
//     document.write("<br>")
//  }


// Example (2)

//  for(var a=1; a<= 5; a++){
//     for(var b = 1; b<=a; b++){
//         document.write(a + " ")
//     }
//     document.write("<br>")
//  }

// Example (3)

// for(var a=5; a >=1; a--){
//     for(var b =1; b <= a; b++){
//         document.write(a + ' ')
//     }
//     document.write("<br>")
// }

// Example (4)

// for(let a=1; a<=5; a++){
//     document.write(a +"<br>")
//     for(let b=1; b<=5; b++){
//         document.write("b")
//     }
// }

// ARRAYS  Example
// //     0   1   2   3   4   <== index Number
// var ary = [10, 20, 30, 40, 50];
// var sum = 0;
// for (var a = 0; a <= 4; a++) {  // <== index number lega arrey ka
//     document.write(ary[a] + "<br>");
//     sum = sum + ary[a]
// }
// document.write("TOtal sum:" + sum)


// new ARRAY

// var ary = new Array();
// ary[0] = "NAME:";
// ary[1] = "F.NAME:";
// ary[2] = "EMAIL:";
// ary
// for (var a = 0; a <= 2; a++) {
//     document.write(ary[a] + "<br>")
// }

// User se Information lena Arry k zariye

// var ary = new Array();
// for(var g = 0; g< 3; g++ ){
//     ary[g] = prompt("Enter Your Value");
//   document.write(ary[g] + "<br>")

// }


// MUltidimensional ARRAY  With Table

//  var ary= [
//     ["harry", 18,"Male" , "B.com"],
//     ["sunny", 19, "Male", "BCA"],
//     ["SARAh", 20 , "FEMALE", "BA"]
//  ];
//  document.write("<table border='1px>'")
//  for(var a=0; a<3; a++){
//     document.write("<tr></tr>")
//     for(var b= 0; b<4; b++){
//         document.write( "<td>" + ary[a][b] + "</td> ")
//     }
//     document.write("</tr>")
//  }
//  document.write("</table")


// Modify And Remove Array Element

// var a = ["harry", 18, "B.com"];
// document.write(a + "<br>")
//    a[1] = 20
//    document.write(a + "<br>")
//    // DELETE Array element

//    var a =["harry" , 20 , "B.com"];
//    delete a[2];
//    document.write(a + "<br>")

// Array Methods Total (24) <== hai

// var a = [1 + ")rafay", "ahsan", "jawwad", "Hassan"];
// document.write(a + "<br><br>");
// //   a.sort();
//    document.write(a + " sort<==  <br><br>");
// // Pop();
//   document.write(a + "<br><br>");
// //  a.push("kali");
//   document.write(a + "<br><br>");

// concat()  Array methods

// var a = ['rafay', 'ahsan','sameer'];
// document.write(a + " ");
// var b =['jawad' , 'rauf'];
// var c = a.concat(b); // <=== jorna arrays ko
// document.write(c);

// join() Array methods <=== 2 Arrays ko 1 value bna ka tariqa

// var a = ['rfay', 'sameer', 'waseem'];
// var b =['rauf', 'salman'];
// var c = a.concat(b);
// document.write(c + "<br><br>")
// var d = c.join('_');
// document.write(d);

// slice();
//     0         1         2        3       4
// var a = ['Rafay', 'sameer', 'rauf', 'Ahsan', 'jawwad'];
// document.write(a + "<br><br>");
// var b = a.slice(1, 4); // <==== 3 value leni hai to 4 value tk lhikna huga 
// document.write(b + "<br><br>");
  
// Example 2 slice()
           -4       -3          -2      -1        -0     
// var a = ['rafay' ,'ahsan' , 'jawwad', 'ahmed' ,'sameer'];
// document.write(a + "<br><br>");
// var b = a.slice(-2); // <==== ulta chley ga agr minus per lhikey gye 
// document.write(b + "<br><br>");


// Splice(); 
        //  0       1       2        3        4
// var a =["rafay",'ahmed','jawwad','karan','Rehman'];
// document.write(a + "<br><br>");
//    a.splice(2,0,'rahul' ,'sameer');','
// //    document.write(a + "<br><br>");
//    a.splice(2,3,'rahul' ,'sameer')
//    document.write(a + "<br><br>");


// isArray();  Example (1)

// var a = ["sanjay" , 'rahul','rafay','jawwad','ahmed'];
// var b = 10;
// var c = 'sameer'
// document.write(a + '<br><br>');

// var b = Array.isArray(a);
// document.write(b + "<br><br>");
 
// Example (2) isArray();

// var a = ['rafay' , 'sameer','ahmed'];
// var b = 20;
// var c = 'waseem';
// if( Array.isArray(a)){
//    document.write('is Array ')
// }else{
//         document.write("is not Array")
// }


// indexOf(); Example (1)
//           0        1          2       3       4   <== index number  
// var a =['rafay', 'sameer', 'ahmed','ahsan','sameer'];
// var b = a.indexOf('sameer');
// document.write(b);

// Example (2)

// var a = ['rafay', 'sameer','ahmed','ahsan','sameer'];
// var b = a.indexOf('sameer',3);
// document.write(b);

// some(); agr koi se bhe 1 value bhe true huti h to chl jye ga

// var ages =[10,12,18,20];
// document.write(ages + '<br><br>');
// var b = ages.some(checkAdult);
// document.write(b + '<br><br>')
// function checkAdult(age){
//         return age >=18;
// }


// Example (2)
// var  ages= [10,15,12,13];
// document.write(ages + '<br><br>');

// var b = ages.some(checkAdult);
// function checkAdult(age){
//         return age >= 18;
// }
// document.write(b + '<br><br>');


// Every() ager sab value True huguye tab he chley ga ye

// var ages = [18,20,21,12];
// document.write(ages + '<br><br>');
 
// var b = ages.every(checkAdult);
// function checkAdult(age){
//         return age >= 18;
// }
// document.write(b + '<br><br>')

// find()

// var ages = [10,2,1,19];
// document.write(ages + '<br><br>');
// var b = ages.find(checkAdult);
// function checkAdult(age){
//         return age >= 18;
// }
// document.write(b + '<br><br>');

// findIndex()
         //  0 1  2  3   <=== index number dhikta hai ye 

// var ages = [10,2,19,20];
// document.write(ages + '<br><br>');

// var b = ages.findIndex(checkAdult);
// document.write(b + '<br><br>');
// function checkAdult(age){
//        return age >= 18;
// }

// filter()

// var ages = [10,18,20,15];
// document.write(ages +'<br><br>')

// var b = ages.filter(checkAdult);
// document.write(b + '<br><br>')
// function checkAdult(age){
//         return age >=18;
// }

// tostring()

// var a = ['rafay','ahsan','sameer','fahad'];
// a.toString();
// document.write(a + '<br><br>');

// valueOf();

 // forEach(); 

// var a = ['sanjey','rahul','ahsan','sameer'];
// a.forEach(function(value,index){
//      document.write(index + ":" + value + "<br><br>")
// })




// Objects

// Example (01)
// var a ={
//         fname: 'Abdul',
//         lname: 'Rafay',
//         age: 20,
//         email: 'rafay@gmail.com',
// }
// document.write(a.fname,a.lname,a.age,a.email) 

//Example (02)

// var a={
//         fname:'abdul',
//         lname: 'rafay',
//         age:20,
//         email:'rafay@gmail.com',
//         favMovie: ['Dhoom','sholey','Hum'] // <=== Arrey 
// }
// document.write(a.favMovie);

// Example (03)

// var a ={
//         fname:'abdul',
//         lname:'rafay',
//         age:20,
//         email:'rafay@gmail.com',
//         favMovie: ['Dhoom','Sholey','Hum'],
//         salary: function (){   // <=== object k ander function bhe bana sktey hai
//                 return 25000;
//         }
// }
// document.write(a.salary());

// Example (04)

// var a ={
//         fname:'abdul',
//         lname:'rafay',
//         age:20,
//         email: 'rafay@gmail.com',
//         favMovie:['Dhoom','sholey','Hum'],
//         fullname: function(){ // <== object me multiple function bhe bna sktey hai ismey or cocenect bhe kr sktey h 
//                 return this.fname + " " + this.lname; 
//         }
// }
// document.write(a.fullname());

// Example (05)

// var  a={
//         fname: 'abdul',
//         lname:'rafay',
//         age:20,
//         living:{  // <==== 1 or object bna sktey h object k ander 
//                 'city': 'Karachi',
//                 'country': 'Pakistan'
//         }
// }
// document.write(a.living.country);

// Array of Object 
// Example (01)

// var student=[   // <=== Array k ander
//         {name: 'rafay', age: '20'}, 
//         {name: 'Ahsan', age: '21'},  // <==== Object dal sktey hai 
//         {name: 'Jawwad', age: '19'},
// ];
// for(var a = 0; a < student.length; a++){
//      document.write(student[a].name + '<br>'+ " " + student[a].age + '<br>')
// }

// const variable of Array  
// Example (01)
    //    0   1  2  <=== index number
// const a =[10,20,30];
// // a =25;  // <=== Wrong tarika
// a[1] = 25; // <==== braket k andr Array ka index number dley ga  tab he change huga 
// console.log(a)

// Const variable of Object

// const a ={
//         name: 'rafay',
//         age: 20
// }
// a.name = 'Abdul Rafay'; // <=== object k ander change krney ka tarika const ki value 
//     a.age = 21; 
// console.log(a)

// for in loop of Object

//Example (01)

// var a ={
//         Fname: 'Abdul',
//         Lname: 'Rafay',
//         Email: 'rafay@gmail.com',   
//         country: 'Pakistan'
// };
// for(var key in a){
//         document.write(key + " :" + a[key] + "<br>") // <=== Properties or value 2 no  Print huye hai 
// };

//Example (02)

// var a ={
//         Fname: 'Abdul',
//         Lname: 'Rafay',
//         Email: 'rafay@gmail.com',
//         country: 'Pakistan'
// };
// for(var key in a){
//         document.write(a[key] + "<br> " )  // <=== value Print huye hai 
// }


// Array - Mao () function 

//Example (01)

// var ary =[11,2,3,4];
// var b = ary.map(test);
// document.write(b)
// function test(x){  braket k ander 1 value pas krni hogi
//     return x *10;
// }

// Example (02)

// var ary =[
//     {fname: 'Abdul', Lname: 'Rafay'},
//     {fname: 'Jawwad', Lname: 'Ahmed'}   // Object bhe dal sktey hai array k ander or Map bhe chla sktey hai 
// ];
// var b = ary.map(test)
// document.write(b)
// function test (x){
//     return x.fname + ' '+ x.Lname + '<br>';
// }

// function add(){
//   document.getElementById('header').style.background = 'red'
// console.log('add()')
// }

// Dom addEventListener()

// Example (01)

// document.getElementById('header').onclick = add;

// function add(){
//     document.getElementById('header').style.background ='red';
//     console.log('add()')
// }

// Dom create Element

// 1) createElement 
// 2) createTextnode
// 3) createcomment
// createElement (01)
//Example (01)
// var newElement = document.createElement("h1");
// // createTextNode (02)
// // Example(01)
// var textElement = document.createTextNode("this a just Text"); 
// // createcomment
// // Example (03)
// var newcomment = document.createComment("this is comment");

// console.log(newElement);
// console.log(textElement);
// console.log(newcomment);

// Dom Append Methods

// 1) appenChiled
// 2) insertBefore

// apppendchiled 
// Example (01)

//  var headingElement = document.createElement("h2");

//  var textElement = document.createTextNode("this is just Text");

//   headingElement.appendChild(textElement);

//  document.getElementById("test").appendChild(headingElement);

// // document.write(headingElement)


// // innsertBefore()

// // Example(01)
// var target = document.getElementById('test');

// target.insertBefore(headingElement,target.childNodes[1]);


// Dom create and appendChild Methods

//  Example (01)

// var target = document.getElementById("test");
// var headingElement = "<h1>This is just text</h1>";
// target.insertAdjacentHTML("afterbegin", headingElement);

// replacechild 

//Example (01)

// var newElement = document.createElement('li');

// var newText = document.createTextNode("wow ne Text");

// newElement.appendChild(newText)
// var target = document.getElementById("list");
// var oldElement = target.children[0];

// target.replaceChild(newElement , oldElement);

// Dom contains()
// Example (01)
// let parentElement = document.getElementById('test');
// let target = document.getElementById('abc');
// let find = parentElement.contains(target);
// console.log(find)

// hasAttribute()
// example(01)

// let target = document.getElementById('test')
// find = target.hasAttribute('class');
// console.log(find)


// form Event


// onfocus() event
// function focusfunction(element){
//     element.style.background="grey"
// }
// // blur() event
// function blurfunction(element){
//     element.style.background=""
// }

// // onchange()
// function changefunction(element){
//    var x = element.value
//     document.getElementById("test").innerHTML = x
// }

// onsubmit()

// function submitfunction(){
//     // var x = document.getElementById('fname').value
//      console.log("hello ")
// }


//setinterval()
// var a = 0;
// setInterval(Animat, 100);


// function Animat() {
//   a = a + 10;
//    var target = document.getElementById('tests')
//    target.style.marginLeft = a + 'px';
// }

//clearInterval()

//settimeout()

// var id=setTimeout(Animat , 5000);

// function Animat(){

//     var target = document.getElementById('tests');
// target.style.width = a + '500px';
// }

// // cleartiomeout()

// function stopfunction(){  // <=== button k function bnu 
//     clearTimeout(id)
// }

// var mywindow;

// function openwindow(){
//     mywindow =  window.open("https://web.whatsapp.com/", "" , "width=800px,height=400px,left=300px,top=150px");
// }

// function closewindow(){
//     mywindow.close()
// }


// Advance JavaScript Start
// Tamplete Literls Old Java

// var User = "rafay"
// var greet = "hello" + User;
// document.write(greet)

// Tamplets String Advance

// var User = "advance  javascripte Rafay";
// var greet = `hello ${User}`;
// document.write(greet)