// declare let process: {
//   env: {
//     NODE_ENV: 'development' | 'production';
//   };
// };

// process = {
//   env: {
//     NODE_ENV: 'production',
//   },
// };

// 11.1.2 アンビエント型宣言
// type ToArray<T> = T extends unknown[] ? T : T[];

// function toArray<T>(a: T): ToArray<T> {}

// 11.1.3 アンビエントモジュール宣言
declare module 'module-name' {
  export type MyType = number;
  export type MyDefaultType = { a: string };
  export let myExport: MyType;
  let myDefaultExport: MyDefaultType;
  export default myDefaultExport;
}

// import ModuleName from 'module-name';
// ModuleName.a; // string
