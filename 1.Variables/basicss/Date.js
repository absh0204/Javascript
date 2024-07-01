//dates

// let mydate=new Date()
// console.log(`1st:-${mydate.toString()}`);
// console.log(`2nd:-${mydate.toDateString()}`);
// console.log(`3rd:-${mydate.toLocaleString()}`);
// console.log(typeof mydate)

let mycreate=new Date(2023,0,23)

console.log(mycreate.toDateString());

// time stamp in milisecond
let mystamp=Date.now();

console.log(mystamp);

console.log(mycreate.getTime());

// to convert millisecond to seconds
console.log(Math.floor(Date.now()/1000));
// {getDay,getMonth Etc}
// customize the output produced by funtion localeString


// mycreate.toLocaleString('default',{
//     weekday:"long",
//     timeZone:''

// })

