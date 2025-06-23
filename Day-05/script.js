// Task 1
for (let i = 0; i < 5; i++) {
  let res = "";
  for (let j = 0; j < i + 1; j++) {
    res += "* ";
  }
  console.log(res);
}

// task 2
let n = 3;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

// task 3
let sum = 0;
for (let num = 1; num <= 500; num++) {
  if (num % 2 !== 0) {
    sum += num;
  }
}
console.log(sum);

// Task 4
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
}

// Task 5
let num = 6789;
let revNum = 0;
let temp = num;
while (temp > 0) {
  let lastDigit = temp % 10;
  revNum = revNum * 10 + lastDigit;
  temp = Math.floor(temp / 10);
}

console.log(revNum);
