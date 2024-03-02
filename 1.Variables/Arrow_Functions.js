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











