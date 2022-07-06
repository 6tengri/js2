let a = +prompt("Enter the number");
let b = +prompt("Enter the number");
let c = +prompt("Enter the nubmer");

// if (a > b) {
//   console.log(`Maximum value is ${a}`);
// } else if (b > c) {
//   console.log(`Maximum value is ${b}`);
// } else {
//   console.log(`Maximum value is ${c}`);
// }

// не смог решить проблему через условный оператор, в первом, если же например а больше б тогда уже не учитывают с даже если оно больше, и сразу же в консоли выводится что а больше example: a=6 b=4 c=9 тут в консоли показывают что а самое большое значение"

console.log(Math.max(a, b, c));
