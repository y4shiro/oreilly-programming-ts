// 8.1 JS のイベントループ

// setTimeout(() => console.info('A'), 1);
// setTimeout(() => console.info('B'), 2);
// console.info('C');

// import * as fs from 'fs';

// // Apache サーバのアクセスログからデータを読み込む
// fs.readFile(
//   '/var/log/apache2/access_log',
//   { encoding: 'utf8' },
//   (error, data) => {
//     if (error) {
//       console.error('error reading!', error);
//       return;
//     }
//     console.info('success reading!', data);
//   }
// );

// // 同時に、同じアクセスログにデータを書き込む
// fs.appendFile(
//   '/var/log/apache2/access_log',
//   'New access log entry',
//   (error) => {
//     if (error) {
//       console.error('error writing!', error);
//     }
//   }
// );

// 8.3 プロミスを使って健全さを取り戻す
// function appendAndReadPromise(path: string: data: string): Promise<string> {
// 	return appendPromise(path, data)
// 	.then(() => readPromise(path))
// 	.catch(error => console.error(error));
// }

import { readFile } from 'fs';

function readFilePromise(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) reject(error);
      else resolve(result);
    });
  });
}

type Executor<T> = (
  resolve: (result: T) => void,
  reject: (error: unknown) => void
) => void;

class Promise<T> {
  constructor(f: Executor<T>) {}
  then<U>(g: (result: T) => Promise<U> | U): Promise<U>;
  catch<U>(g: (error: unknown) => Promise<U> | U): Promise<U>;
}

// let a: () => Promise<string, TypeError>;
// let b: (s: string) => Promise<number, never>;
// let c: () => Promise<boolean, RangeError>;

// a()
//   .then(b)
//   .catch((e) => c())
//   .then((result) => console.info('Done', result))
//   .catch((e) => console.error('Error', e));
