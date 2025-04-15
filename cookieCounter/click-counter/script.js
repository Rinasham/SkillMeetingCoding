// HTMLからボタンの要素を取得
const counterButton = document.getElementById("counter-button");
const cookieButton = document.getElementById("cookie-button");
let counter = 0;
let cookie = 0;
const countText = document.getElementById("counts");
const cookieText = document.getElementById("cookies");

// カウンターボタンをクリックするイベント
counterButton.addEventListener("click", function () {
  // カウンターの数字を１増やして画面を書き換える
  counter += 1;
  countText.textContent = `${counter} カウント`;
});

// 「クッキーを買う」ボタンを押すイベント
cookieButton.addEventListener("click", function () {
  // カウンターの数字が５に満たない場合は何もせずリターン
  if (counter < 5) {
    return;
  }
  // カウンターの数字を５減らし、クッキーの数字を１増やして画面を書き換える
  counter -= 5;
  countText.textContent = `${counter} カウント`;
  cookie += 1;
  cookieText.textContent = `${cookie} クッキー`;
});
