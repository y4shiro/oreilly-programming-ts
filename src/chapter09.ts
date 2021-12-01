// // グローバルな window オブジェクトからプロパティを読み取る
// const model = {
//   url: window.location.href,
// };

// // <input /> 要素を作成する
// const input = document.createElement('input');

// // それに CSS を与える
// input.classList.add('Input', 'URLInput');

// // ユーザーが入力したときに、モデルを更新する
// input.addEventListener('change', () => (model.url = input.value.toUpperCase()));

// // <input /> を DOM に挿入する
// document.body.appendChild(input);

// document.querySelector('.Element').value;

// 9.2 型安全な API
// type Request =
//   | { entity: 'user'; data: User }
//   | { entity: 'location'; data: Location };

// // client.ts
// async function get<R extends Request>(entity: R['entity']): Promise<R['data']> {
//   const res = await fetch(`/api/${entity}`);
//   const json = await res.json();
//   if (!json) {
//     throw ReferenceError('Empty response');
//   }
//   return json;
// }

// // app.ts
// async function startApp() {
//   const user = await get('user');
// }
