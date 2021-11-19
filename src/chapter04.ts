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

// 4.1.5
function* createFibonacciGenerator() {
  let a = 0;
  let b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
const fibonacciGenerator = createFibonacciGenerator(); // Generator<number>
fibonacciGenerator.next(); // {value: 0, done: false}
fibonacciGenerator.next(); // {value: 1, done: false}
fibonacciGenerator.next(); // {value: 1, done: false}
fibonacciGenerator.next(); // {value: 2, done: false}
fibonacciGenerator.next(); // {value: 3, done: false}
fibonacciGenerator.next(); // {value: 5, done: false}

// 4.1.7
// function greet(name: string)
type Greet = (name: string) => string;

// function log(message: string, userId?: string)
type Log = (message: string, userId?: string) => void;

// function sumVariadicSafe(...numbers: number[]): number
type SumVariabdicSafe = (...numbers: number[]) => number;

const log: Log = (message, userId = 'Not signed in') => {
  const time = new Date().toISOString();
  console.log(time, message, userId);
};

// 4.1.8
function times(f: (index: number) => void, n: number) {
  for (let i = 0; i < n; i++) {
    f(i);
  }
}
times((n) => console.log(n), 4);

// 4.1.9
// type Log2 = (message: string, userId?: string) => void;
type Log2 = {
  (message: string, userId?: string): void;
};

// type Reserve = {
//   (from: Date, to: Date, destination: string): Reservation;
//   (from: Date, destination: string): Reservation;
// };

// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination?: string
// ) => {
//   if (toOrDestination instanceof Date && destination !== undefined) {
//     // 宿泊旅行を予約
//   } else if (typeof toOrDestination === 'string') {
//     // 日帰り旅行を予約
//   }
// };

// 4.2
// type Filter = {
//   (array: number[], f: (item: number) => boolean): number[];
//   (array: string[], f: (item: string) => boolean): string[];
//   (array: object[], f: (item: object) => boolean): object[];
// };
type Filter = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

const filter: Filter = (array, f) => {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
};
filter([1, 2, 3, 4], (_) => _ < 3); // [1, 2] と評価される
filter(['a', 'b'], (_) => _ !== 'b'); // ['a']

const names = [
  { firstName: 'beth' },
  { firstName: 'caitlyn' },
  { firstName: 'xin' },
];
filter(names, (_) => _.firstName.startsWith('b')); // [{ firstName: 'beth' }]
