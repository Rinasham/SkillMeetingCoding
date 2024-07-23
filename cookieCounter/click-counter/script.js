// HTMLからボタンの要素を取得
let button = document.getElementById("counter-button");
let counterNum = 0;
let cookieButton = false;

// ボタンをクリックするイベント時に発火
button.addEventListener("click", function () {
  // 押されるたびにカウンターに表示される数字を１ずつ増やす
  counterNum += 1;
  let result = document.getElementById("result");
  result.textContent = `今 ${counterNum} クリックです`;

  // カウンターの数字が５に増えた時の処理
  if (counterNum == 5) {
    // まだ「クッキーを買う」ボタンがない場合は作成して画面上に表示
    const newButton = document.createElement("button"); // ボタン要素の作成
    if (cookieButton == false) {
      newButton.textContent = "クッキーを買う";
      document.body.appendChild(newButton); // HTML上に追加
      // booleanをtrueにして２回目以降は「クッキーを買う」ボタンが作られないようにする
      cookieButton = !cookieButton;
    }
    // 「クッキーを買う」ボタンが既に存在している場合
    let cookies = 0;
    const howManyCookies = document.createElement("p"); // pタグの要素を作成
    document.body.appendChild(howManyCookies); // HTML上に追加

    // 「クッキーを買う」ボタンを押した時に発火
    newButton.addEventListener("click", function () {
      // カウンターの数字が５に満たない場合は何もせずリターン
      if (counterNum < 5) {
        return;
      }
      // カウンターの数字を -5 する
      counterNum -= 5;
      result.textContent = `今 ${counterNum} クリックです`;
      cookies += 1;
      // クッキーが1枚の時は単数系「cookie」、２枚以上なら複数形「cookies」で分岐
      if (cookies == 1) {
        howManyCookies.textContent = `${cookies} cookie 持っています`;
      } else {
        howManyCookies.textContent = `${cookies} cookies 持っています`;
      }
    });
  }
});
