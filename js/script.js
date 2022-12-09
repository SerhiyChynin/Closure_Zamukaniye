
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
a = 56;
console.log(a);
console.log(c());
console.log(c());


// Home work

function t2() {
    let b = 0;
    return () => {
        b = b + 1;
        return b;
    }
}
let f = t2();
let d = t2();
console.log(f);
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(f());
console.log(d());
console.log(d() + f());
console.log(d() * f());
b = 4;

console.log(d());
console.log(d());
console.log(d());
console.log(b);












// console.log(one());










// console.log(a);
// console.log(one());
// console.log(a);
