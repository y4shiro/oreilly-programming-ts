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
type ToArray<T> = T extends unknown[] ? T : T[];

function toArray<T>(a: T): ToArray<T> {}
