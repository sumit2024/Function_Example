

// check the number is even or odd

let number = 36;

// if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}
// if the number is odd
else {
    console.log("The number is odd.");
}


//factorial number

let numb = 4;
if (numb < 0) {
    console.log('invalid');
}
else if (number === 0) {
    console.log("The factorial of ${numb} is 1.");
}
else {
    let fact = 1;
    for (i = 1; i <= numb; i++) {
        fact *= i;
    }
    console.log("The factorial of "+numb+"= "+fact);
}

7


//////////////////////////////////////////////////////////////////////////////////////
var student= (function () {
    var stu = "i am student of jspiders";
    console.log(stu);
})();

 var result = (function () {
        var name = "Barry"; 
        console.log(name);  
    })(); 

// naming function

var x = Functionn(6, 9);   

function Functionn(a, b) {
  return a * b;             
}
console.log(x); 

var y = Functionn( 12 ,30) ;
function Functionn(length, width){
    return length * width;
}
console.log(y); 

//arrow functon
const citys = [
    'betul',
    'mumbai',
    'delhi',
    'pune'
  ];
  console.log(citys.map(citys => citys.length));

// example2
var peopleNames = [ ["Jonas", "Rogers"], 
                    ["Mel", "Gibson"], 
                    ["Lucy", "Liu"], 
                    ["Edward", "Scissorhands"] ];

var modifiedNames = peopleNames.map(function(arrayCell){
	return arrayCell[0] + " " + arrayCell[1];
});
//callback function

function greeting(name) {
     console.log(name);
  }
  
  function processUserInput(callback) {
    var name = "vishu malvi";
    callback(name);
  }
  console.log(processUserInput(greeting));

console.log(" example2");


//   example2
var numbers1 = [1, 2, 4, 7, 3, 5, 6];
let oddNumbers = numbers1.filter(function(number) {
    return number % 2;
});
console.log(oddNumbers);


//Anonymous function

let show = function () {
    console.log('It is  a First Anonymous function');
};
show();

// example2

let display = function(){
    console.log("its a Second Anonymous function")
};
display();

//function with  default parameter
function users(First_name ="vishu",Last_name = "malvi", age = 23)
    {
    return{First_name , Last_name,age};
    
}
console.log(users("vishu","malvi",23));


function Substraction(a = 100, b = 70) {
    return a - b;
};

console.log("Substraction => " + Substraction());


  //function with parameter and argument
  // example 

function areaOfSquare(length){
    return(length * length);
}
console.log("Area of Square => " + areaOfSquare(5));

function user(name,age,company,salary){
    
return{name,age,company,salary};
}
console.log(user("manu",24,"infosis",40000));

// example2
function area(length,width){
    return(length * width);

}
console.log(area(3,6));




//check the number is prime or not

function isPrime(num) {

    if (num === 2) {
      return true;
    }
    else if(num > 1){
      for (var i = 2;  i < num; i++) {
  
        if (num % i !== 0 ) {
          return true;
        }
  
        else if (num === i * i) {
          return false
        }
  
        else {
          return false;
        }
      }
    }
    else {
      return false;
    }
  
  }
  
  console.log(isPrime(121));


  //fabonaci series

  function fib(num){
    if(num==1)
    return 0;
    if(num==2)
        return 1;
    
    return fib(num-1)+fib(num-2);
}

document.write(fib(10));

function add(a,b){
    var x=parseInt(prompt());//String converted into int using parseInt
    var y=parseInt(prompt());
    var sum=0;
    var  sum=x+y;
   console.log(sum);
   
}
 add();

//alindrome or not-

function Palindrome(str) {
    let len = string.length;

    for (let i = 0; i < len / 2; i++) {

        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let string = 'nitin';
let value = Palindrome(string);
console.log(value);

//find biggest among three//

let num1 = 12;
let num2 = 34;
let num3 = 50;
let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
console.log("The largest number is " + largest);




//reverse a string


function revString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
let string1= 'vishu';
let result1 = revString(string1);
console.log(result1);

function revString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}


// return function
function concatenate(first, last) {
    var full;
    full = first + last;
    return full;
 }
 function secondFunction() {
    var result;
    result = concatenate('Zara', 'Ali');
    document.write (result );
 }

// ex 2
 function getInfo(){  
    return "hello javatpoint! How r u?";  
    }  
    
document.write(getInfo());  