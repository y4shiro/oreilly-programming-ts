// グローバルな window オブジェクトからプロパティを読み取る
const model = {
  url: window.location.href,
};

// <input /> 要素を作成する
const input = document.createElement('input');

// それに CSS を与える
input.classList.add('Input', 'URLInput');

// ユーザーが入力したときに、モデルを更新する
input.addEventListener('change', () => (model.url = input.value.toUpperCase()));

// <input /> を DOM に挿入する
document.body.appendChild(input);

document.querySelector('.Element').value;
