function fib(){
  let total = 0;
  let current = 1;
  let prev = 0;
  let temp = 0;
  let ray = [];
  for (let i = 0; i < 50; i++){
    temp = current;
    current = current + prev;
    prev = temp;
    ray [i] = current;
  }
  return ray;
}

console.log(fib());
