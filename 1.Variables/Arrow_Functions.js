const user={
    name:"ab",
    p:"vv",  //this to refer current context
    welcome:function(){
        console.log(`${this.username}, welcome`);
        console.log(this)
    }
}
user.welcome()
console.log(this)   


////////////////Arrow Functions
// remove function key word//

const chai=()=>{
    let username="hitesh"
    // console.log(this.username);//undefined
    console.log(this);//output:-{}

}

// const addTwo=(num1,num2)=> num1+num2;

// curly pe return
// const addTwo=(num1,num2)=> {
//     num1+num2;
// }


// global scope ke polution cause problems to 
// to remove pollutions this immediately invoked functions are used

// when function is executed ifi is executed immediatly
// SyntaxError

// (function chaii(){
//     console.log("chailele")
// })();
// ';' to end ifi invoked as it does not will be able to know where to end


((name)=>{
    console.log("launch");
})('hit')











