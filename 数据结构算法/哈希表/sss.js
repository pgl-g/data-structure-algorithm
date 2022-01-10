

var fn;
function foo(){ 
  var a = 2;
  function bas() {
    console.log(a, '1');
  }

  fn = bas
}
foo();

console.log(fn, '2');

function bar() {
  fn();
}

bar();