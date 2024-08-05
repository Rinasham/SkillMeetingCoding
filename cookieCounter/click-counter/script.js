// HTMLからボタンの要素を取得
let button = document.getElementById("counter-button");
let counterNum = 0;
let cookieButton = false;

// ボタンをクリックするイベント時に発火
button.addEventListener("click", function () {
  // 押されるたびにカウンターに表示される数字を１ずつ増やす
  counterNum += 1;
  let counter = document.getElementById("counter");
  counter.textContent = `${counterNum} カウント`;

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
    const cookieNum = document.createElement("p"); // pタグの要素を作成
    document.body.appendChild(cookieNum); // HTMLに要素を追加

    // 「クッキーを買う」ボタンを押した時に発火
    newButton.addEventListener("click", function () {
      // カウンターの数字が５に満たない場合は何もせずリターン
      if (counterNum < 5) {
        return;
      }
      // カウンターの数字を -5 する
      counterNum -= 5;
      counter.textContent = `${counterNum} カウント`;
      cookies += 1;
      // HTML上のクッキーの枚数を書き換え
      cookieNum.textContent = `${cookies} クッキー`;
    });
  }
});
