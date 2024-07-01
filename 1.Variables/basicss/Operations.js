
/*
console.log(1+"2")   =12 
console.log("1"+2)   =12
console.log("1"+2+3+4) =1234
console.log(1+2+3+"5")  =65
console.log(+true)=1  
console.log(+"")  =0

"==" and comparison operators(<,>,<=,>=) works differently
while comparison operators converts null to 0

"===" strict check before comparison data type is checked of arguments

 */

// Data types:- 1) primitive and non-primitive

//primitive datatypes:(7 types) String, number , null, bigInt, undefined, Symbol, Boolean 
// bigInt: let num=1233432532534n;(n)
//reference is given and changes are made in those


/*
 Javascript is dynamically defined
*/

// non primitive 
const v=["tin" ,"abs"];// ARRAY
let Obj={   /////////////OBJECT
    name:"Atul",
    class:"cse A",
    no:12334,

}

const myfn=function(){
    console.log("Hello world");
}

// all the primitive datatypes are stored in stack
// all the non-primitive in the heap {heap mei same name wale ko same reference }


