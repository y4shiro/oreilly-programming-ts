// 8.1 JS のイベントループ

// setTimeout(() => console.info('A'), 1);
// setTimeout(() => console.info('B'), 2);
// console.info('C');

import * as fs from 'fs';

// Apache サーバのアクセスログからデータを読み込む
fs.readFile(
  '/var/log/apache2/access_log',
  { encoding: 'utf8' },
  (error, data) => {
    if (error) {
      console.error('error reading!', error);
      return;
    }
    console.info('success reading!', data);
  }
);

// 同時に、同じアクセスログにデータを書き込む
fs.appendFile(
  '/var/log/apache2/access_log',
  'New access log entry',
  (error) => {
    if (error) {
      console.error('error writing!', error);
    }
  }
);
