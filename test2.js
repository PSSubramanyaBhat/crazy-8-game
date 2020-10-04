"use strict";
// trying out some simple Array methods....

//**1 */

//prg 1
let arr = [1, 2];
let arrayLike = {
    0: "something",
    1: "else",
    // "2": "itself",
    [Symbol.isConcatSpreadable]: true,
    "2": "itself",
    length: 3
};
console.log(arr.concat(arrayLike) ); // 1,2,something,else

//prg 2
let arr2 = [ 1, 5, 2, 15 ];
arr2.sort(function(a, b) { return a - b; });
console.log(arr2);  // 1, 2, 15
let arr3 = [1, 2, 3, 4, 5];
let result = arr3.reduce((sum, current) => sum + current);
console.log(result); // 15


//**2 */
/*-----THESE METHODS TAKE IN FUNCTIONS AS PARAMETER-----*/
//forEach
//find
//filter
//map  -> Transforms and returns an array
//reduce -> uses a function that take 'acc' and 'cur' as paemeters

/* Prog 3 */
let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

/* Prog 4 */

function  camelize (str) {
    if (str[0] === "-") {
        str = str.substr(1, str.length - 1);

    }
    if (str[str.length - 1] === "-") {
        str = str.substr(0, str.length - 1);
    }
    
    let ref = str.split("-");
    let refer2 = [];
    let refer = ref.map(item => {
        refer2.push(item[0].toUpperCase() + item.substr(1, str.length - 1));

    });
    
    let finalString = refer2.join("");
    console.log(finalString[0].toLowerCase()+finalString.substr(1, str.length - 1));
}

camelize("background-color");
camelize("list-style-image");
camelize("yo-style-image-");
camelize("-webkit-transition");




/* Prog 5 */
function filterRange(ar4, min, max) {
    // let newar4 = [];
    /*
    //Method 1
    for (let i of ar4) {
        if (i >= min && i <= max) {
            newar4.push(i);
        }
    }
    return newar4;
    */

    //Method 2
    return ar4.filter(item => item >= min && item <= max);
}



let arr4 = [5, 3, 8, 1];
let filtered = filterRange(arr4, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr4 ); // 5,3,8,1 (not modified)


/*Prg 6*/
let arr6 = [5, 2, 1, -10, 8];
// ... your code to sort it in decreasing order
arr6.sort().reverse();
console.log( arr6 ); // 8, 5, 2, 1, -10

