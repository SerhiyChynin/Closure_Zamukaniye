
let a = 5;
function t1() {
    let a = 0;
    return function () {
        a = a + 1;      // эта область функции замкнулась на переменной а которая выше в функции t1.
        return a;
    }
}

let b = t1();
let c = t1();
console.log(b);
console.log(b());
console.log(b());
console.log(b()); 
a = 56;
console.log(a);
console.log(c());
console.log(c());
console.log(c());
console.log(c());
// b = 9;






// console.log(one());










// console.log(a);
// console.log(one());
// console.log(a);
