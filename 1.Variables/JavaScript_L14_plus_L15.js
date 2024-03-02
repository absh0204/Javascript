// shallow copy means changes occur in the original one
// deepcompy opposite

const myArr=[1,2,4,5,6,7]
// //method
// myArr.push(6)
// myArr.length
// myArr.pop() // last value is removed
// myArr.unshift(9) add at first position n tc due to shifting

// myArr.shift() //no arguement first element is removed
newArr=myArr.join()
console.log(myArr);
console.log(newArr) //String conversion from Array

// myArr.slice(incl,not include)// gives the output list with sliced part
// myArr.splice(incl,notinclu); // Manipulate original one and changes are reflected on the 
// new original one sliced part with including index in shown in result but also the original ones is cutted

// Arrays can take any value even an array itself
// best way is to use concat
// concat: combines arrays and return a new array which must be stored

// const all=[..arr1,...arr2] //spread operator works same as concate

// const real_array=arr.flat(Infinity)// it convert array of array of array into a single array


