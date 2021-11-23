// // 4.1.2
// function sum(numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0);
// }
// console.log(sum([1, 2, 3]));

// function sumVariadic(): number {
//   // eslint-disable-next-line prefer-rest-params
//   return Array.from(arguments).reduce((total, n) => total + n, 0);
// }
// // sumVariadic(1, 2, 3);

// function sumVariabdicSafe(...numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0);
// }
// sumVariabdicSafe(1, 2, 3);

// interface Console {
//   log(message?: any, ...optinalParams: any[]): void;
// }

// // 4.1.3
// function add(a: number, b: number): number {
//   return a + b;
// }

// add(10, 20);
// add.apply(null, [10, 20]);
// add.call(null, 10, 20);
// add.bind(null, 10, 20)();

// // 4.1.4
// const x = {
//   a() {
//     return this;
//   },
// };
// x.a();

// // function fancyDate() {
// //   return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}}`;
// // }
// // fancyDate.call(new Date);
// function fancyDate(this: Date) {
//   return `${this.getMonth() + 1}/${this.getDate()}/${this.getFullYear()}}`;
// }
// fancyDate.call(new Date());

// // 4.1.5
// function* createFibonacciGenerator() {
//   let a = 0;
//   let b = 1;
//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }
// const fibonacciGenerator = createFibonacciGenerator(); // Generator<number>
// fibonacciGenerator.next(); // {value: 0, done: false}
// fibonacciGenerator.next(); // {value: 1, done: false}
// fibonacciGenerator.next(); // {value: 1, done: false}
// fibonacciGenerator.next(); // {value: 2, done: false}
// fibonacciGenerator.next(); // {value: 3, done: false}
// fibonacciGenerator.next(); // {value: 5, done: false}

// // 4.1.7
// // function greet(name: string)
// type Greet = (name: string) => string;

// // function log(message: string, userId?: string)
// type Log = (message: string, userId?: string) => void;

// // function sumVariadicSafe(...numbers: number[]): number
// type SumVariabdicSafe = (...numbers: number[]) => number;

// const log: Log = (message, userId = 'Not signed in') => {
//   const time = new Date().toISOString();
//   console.log(time, message, userId);
// };

// // 4.1.8
// function times(f: (index: number) => void, n: number) {
//   for (let i = 0; i < n; i++) {
//     f(i);
//   }
// }
// times((n) => console.log(n), 4);

// // 4.1.9
// // type Log2 = (message: string, userId?: string) => void;
// type Log2 = {
//   (message: string, userId?: string): void;
// };

// // type Reserve = {
// //   (from: Date, to: Date, destination: string): Reservation;
// //   (from: Date, destination: string): Reservation;
// // };

// // let reserve: Reserve = (
// //   from: Date,
// //   toOrDestination: Date | string,
// //   destination?: string
// // ) => {
// //   if (toOrDestination instanceof Date && destination !== undefined) {
// //     // 宿泊旅行を予約
// //   } else if (typeof toOrDestination === 'string') {
// //     // 日帰り旅行を予約
// //   }
// // };

// // 4.2
// // type Filter = {
// //   (array: number[], f: (item: number) => boolean): number[];
// //   (array: string[], f: (item: string) => boolean): string[];
// //   (array: object[], f: (item: object) => boolean): object[];
// // };
// type Filter = {
//   <T>(array: T[], f: (item: T) => boolean): T[];
// };

// const filter: Filter = (array, f) => {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     if (f(item)) {
//       result.push(item);
//     }
//   }
//   return result;
// };
// filter([1, 2, 3, 4], (_) => _ < 3); // [1, 2] と評価される
// filter(['a', 'b'], (_) => _ !== 'b'); // ['a']

// const names = [
//   { firstName: 'beth' },
//   { firstName: 'caitlyn' },
//   { firstName: 'xin' },
// ];
// filter(names, (_) => _.firstName.startsWith('b')); // [{ firstName: 'beth' }]

// // 4.2.2
// type Filter1 = {
//   <T>(array: T[], f: (item: T) => boolean): T[];
// };
// type Filter2<T> = {
//   (array: T[], f: (item: T) => boolean): T[];
// };
// type Filter3 = <T>(array: T[], f: (item: T) => boolean) => T[];
// type Filter4<T> = (array: T[], f: (item: T) => boolean) => T[];
// // function filter5<T>(array: T[], f: (item: T) => boolean): T[] {}

// function map<T, U>(array: T[], f: (item: T) => U): U[] {
//   const result = [];
//   for (let i = 0; i < array.length; i++) {
//     result[i] = f(array[i]);
//   }
//   return result;
// }

// // 4.2.3
// const promise = new Promise<number>((resolve) => resolve(45));
// promise.then((result) => result * 4);

// // 4.2.4
// type MyEvent<T> = {
//   target: T;
//   type: string;
// };
// type ButtonEvent = MyEvent<HTMLButtonElement>;
// const myEvent: MyEvent<HTMLButtonElement | null> = {
//   target: document.querySelector('#myButton'),
//   type: 'click',
// };

// type TimedEvent<T> = {
//   event: MyEvent<T>;
//   from: Date;
//   to: Date;
// };

// function triggerEvent<T>(event: MyEvent<T>): void {
//   // ...
// }
// triggerEvent({
//   // T は Element | null
//   target: document.querySelector('#myButton'),
//   type: 'mouseover',
// });

// // 4.2.5
// type TreeNode = {
//   value: string;
// };
// type LeafNode = TreeNode & {
//   isLeaf: true;
// };
// type InnerNode = TreeNode & {
//   children: [TreeNode] | [TreeNode, TreeNode];
// };

// const treeA: TreeNode = { value: 'a' };
// const treeB: LeafNode = { value: 'b', isLeaf: true };
// const treeC: InnerNode = { value: 'c', children: [treeB] };

// function mapNode<T extends TreeNode>(node: T, f: (value: string) => string): T {
//   return {
//     ...node,
//     value: f(node.value),
//   };
// }

// const a1 = mapNode(treeA, (_) => _.toUpperCase()); // TreeNode
// const b1 = mapNode(treeB, (_) => _.toUpperCase()); // LeafNode
// const c1 = mapNode(treeC, (_) => _.toUpperCase()); // InnerNode

// // 4.2.5.1
// type HasSides = { numberOfSides: number };
// type SideshaveLength = { sideLength: number };

// function logPermitter<Shape extends HasSides & SideshaveLength>(
//   s: Shape
// ): Shape {
//   console.log(s.numberOfSides * s.sideLength);
//   return s;
// }

// type Square = HasSides & SideshaveLength;
// const square: Square = { numberOfSides: 4, sideLength: 3 };
// logPermitter(square); // 12

// // 4.2.5.2
// // function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
// //   return f(...args);
// // }
// // function fill(length: number, value: string): string[] {
// //   return Array.from({ length }, () => value);
// // }
// // call(fill, 10, 'a');

// // 4.5 練習問題
// // 問 3
// type Reservation = unknown;

// type Reserve = {
//   (from: Date, to: Date, destination: string): Reservation;
//   (from: Date, destination: string): Reservation;
//   (destination: string): Reservation;
// };

// const reserve: Reserve = (
//   fromOrDestination: Date | string,
//   toOrDestination?: Date | string,
//   destination?: string
// ) => {
//   if (
//     fromOrDestination instanceof Date &&
//     toOrDestination instanceof Date &&
//     destination !== undefined
//   ) {
//     // 宿泊旅行を予約
//   } else if (
//     fromOrDestination instanceof Date &&
//     typeof toOrDestination === 'string'
//   ) {
//     // 日帰り旅行を予約
//   } else if (typeof fromOrDestination === 'string') {
//     // すぐに出発する旅行を予約する
//   }
// };

// // 問 4
// function call<T extends [unknown, string, ...unknown[]], R>(
//   f: (...args: T) => R,
//   ...args: T
// ): R {
//   return f(...args);
// }
// function fill(length: number, value: string): string[] {
//   return Array.from({ length }, () => value);
// }
// call(fill, 10, 'a');

// // 問 5
// function is<T>(a: T, ...b: [T, ...T[]]): boolean {
//   return b.every((_) => _ === a);
// }

// is('string', 'otherstring'); // false
// is(true, false); // false
// is(42, 42); // true
// // is(10, 'foo'); // エラー

// // 難問 任意の数の引数を渡せるようにする
// is(1, 1, 1); // true
// is(1, 2, 3); // false
