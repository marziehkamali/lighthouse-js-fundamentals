function range(start, end, step) {
  let numArr = [];

  if (start > end || step <= 0 || start === undefined || step === undefined || end === undefined) {
    return numArr;
  }

  for (let i = start; i <= end; i = i + step) {
    numArr.push(i);
  }
  return numArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
