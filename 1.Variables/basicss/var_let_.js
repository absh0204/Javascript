//text=.txt and .js both can be treated as source code
//every source code here has some meaning
console.log("Atul");
/////

const accountId=14453
let accountEmail="Ab2243@gmail.com"
var accountPassword="12112"

// accountCity="Jaipur" //Allowed but it is not preferrable Strictly. Not a good practice but will not give any error.

//Constant value can't be changed once initialized.

accountEmail="haha@gmail.com"
accountPassword="1211222222"
accountCity="Bengaluru"


// WAYS TO PRINT
console.log(accountEmail);
// one at a time^
//ALL TOGETHER
console.table([accountEmail,accountId,accountPassword,accountCity])

/*
-let and var are used for varible declaration.

-JS was not build pastly for working on the basis of block and scopes.

-var is not preferrable as it can't handle scopes and blocks.
    {block scope and functional scope problem}

-let is widly used now a days and is preferrable also 
    because it is able to handle scopes and blocks.

*/
let accountState;   // undefined by default

//DATATYPES

// "use strict" its used to treat all the javascript code as for newer versions/

//ALERT

// alert(9+9) 
// its not used here but only in html files 
// supported only in browsers not in node.js

/*

all different browsers were having different standard for JS so they all together
created a board ECMASCRIPT whose role is to set rules, decide standards
and specification


1)number=> 2 ki power 53 range
2)bignint=> more range than number useful in case of       numbers releated to trading , facebook etc
3)String
4)null=> empty value representation (output in case of function)(typeof O/P= object)
4)undefined=> its a type which indicates value is not set. (output in case of function)(typeof O/P= undefined)
5)symbol=> When many different components are used then it
    is used to uniquely identify.
6)boolean

7)object (null ka type) null is object


*/
