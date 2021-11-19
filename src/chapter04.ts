// 4.1.2
function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum([1, 2, 3]));

function sumVariadic(): number {
  // eslint-disable-next-line prefer-rest-params
  return Array.from(arguments).reduce((total, n) => total + n, 0);
}
// sumVariadic(1, 2, 3);

function sumVariabdicSafe(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
sumVariabdicSafe(1, 2, 3);

interface Console {
  log(message?: any, ...optinalParams: any[]): void;
}

// 4.1.3
function add(a: number, b: number): number {
  return a + b;
}

add(10, 20);
add.apply(null, [10, 20]);
add.call(null, 10, 20);
add.bind(null, 10, 20)();

// 4.1.4
const x = {
  a() {
    return this;
  },
};
x.a();

// function fancyDate() {
//   return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}}`;
// }
// fancyDate.call(new Date);
function fancyDate(this: Date) {
  return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}}`;
}
fancyDate.call(new Date());
