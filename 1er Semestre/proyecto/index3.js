const a = [1, 2, 3, 4, 5];

console.log(a);

let b = [...a, 6];

console.log(b);

const c = b.map(function(x) {
    return x * 2;
});

console.log(b);
console.log(c);
