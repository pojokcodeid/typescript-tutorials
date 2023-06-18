// let , var ,const
// let a: number = 10;
// a = 300;
// console.log(a);

// var b: number = 20;
// b = 100;
// console.log(b);

// const c: number = 30;
// console.log(c);

function testVar() {
  var a = 10;
  if (true) {
    var a = 20; // mengubah nilai
    console.log(a);
  }
  console.log(a);
}

testVar();

function testLet() {
  let a = 10;
  if (true) {
    let a = 20; // tidak mengubah nilai
    console.log(a);
  }
  console.log(a);
}
testLet();
