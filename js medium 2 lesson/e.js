let a = +prompt("Number");
let b = +prompt("Number");
let c = +prompt("Number");

if (a < b < c || a > b > c) {
  console.log("difference");
} else if (a == b == c) {
  console.log("oh no!");
}
