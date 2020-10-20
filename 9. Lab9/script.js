
/* Function 1:
-----------------------------------
const hello = function () {  
console.log('Hello World');   
}*/

// Function 1 omvandlad till Arrow 
const hello = () => "Hello World";  
       
console.log(hello()); 


/* Function 2:
----------------------------------- 
const greet = function(name){
console.log('Hej' + name + 'hur mår du?');
}
*/

// Function 2 omvandlad till Arrow 

const greet = name => "Hej Marc! hur mår du?";
console.log(greet());


/* Function 3:
------------------------------------
const calc = function(numberOne, numberTwo){
       return numberOne + numberTwo;
}
*/

//Function 3 omvandlad till Arrow

const calc = (numberOne, numberTwo) => 7 + 7;
console.log(calc());


/* Function 4:
-------------------------------------
const tip = function(sum, percent){
       let total = sum + sum * percent;
       return total;
}
*/

//Function 4 omvandlad till Arrow

const tip = (sum, sum2, percent) => 11 + 11 / 100 * 10 ;
console.log(tip());









