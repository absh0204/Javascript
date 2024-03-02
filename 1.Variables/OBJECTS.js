//object literals
// Object.create() constructor method
//key value pair
const mysum=Symbol("key1")
const jsuser ={
    name:"hi",
    age:19,
    location:"nagpur",
    [mysum]:"mykey1"
}

// console.log(jsuser.email)

// console.log(jsuser["email"])


// Object.freeze()//dont allow changes in the object
// jsuser.email="" //overwrite
// Object.freeze(jsuser) //no change will occurs even after performing a change

jsuser.greeting=function(){
    console.log("Hello js user");
}
// console.log(jsuser.greeting);// function is not executed but reference has arrived
// console.log(jsuser.greeting());

//"this." used to access jsuser attributes


///////////////////PART TWO//////////////////////

// singleton object
// const t=new Object()
const t=new{}//non singketon
t.id="123"
t.name="ab"

const regularUser={
    em:"nsjsns",
    fullname:{
        userfullname:{
            fs:"at",
            ls:"bh",
        }
    }
}

// console.log(regularUser.fullname?.userfullname.fs);// question mark acts as a if for fetching data

// combine obejcts
// Object ob3=Object.assign({},obj1,obj2)// first argument is in which all are compied others acts as a source
// spread can also be used to merge two objects:-
// const obj3={...obj1,...obj2}

// to querry
// boolean type
// (t.hasOwnProperty('propertyname'));







//////////////////////Destructuring

const course={
    cn:"js in hindi",
    price:"999",
    ciname:"hites"
}

// to make a clean code for accessing
const {ciname:a}=course
console.log(a)// hites output


//////////////////////////////////APIs////////////////////
// kisi aur ke sar pe daalna

// json:
// {
//     "name":"hitesh"
//     "cs":"gs",
//     "price":"free"
// }

 














