// 引数で渡された文章から重複する単語を削除する関数
function removeDuplicates(words) {
  // 引数の文章をスペースで区切って配列に入れる
  const wordsArr = words.split(" ");
  // 重複を削除するために新しい空の配列を作成。
  const newWordsArr = [];
  // ↑で作成したwordsArrをループ。配列の中身は['the', 'cat', 'sat', 'on', 'the', 'mat', 'on', 'the', 'other', 'cat']）
  // newWordsArrにまだない単語はnewWordsArrに入れていく。
  // 既にあるものはスキップして重複をなくす。
  for (i = 0; i < wordsArr.length; i++) {
    if (!newWordsArr.includes(wordsArr[i])) {
      newWordsArr.push(wordsArr[i]);
    }
  }
  // 重複が削除されたnewWordsArr配列を結合し、文字列として返す。
  return newWordsArr.join(" ");
}

// 関数を呼び出して、コンソール上に結果を表示
console.log(removeDuplicates("the cat sat on the mat on the other cat"));

// ------------ 宿題部分 -----------

// 1. idで取得する場合
const res = removeDuplicates("the cat sat on the mat on the other cat");
const idElement = document.getElementById("text-id");
idElement.textContent = res;

// 2. classで取得する場合
const classelement = document.getElementsByClassName("text-class");
classelement[0].textContent = res;

// ------------------ アロー関数書き換え -----------------
const arrowRemoveDuplicates = (words) => {
  const wordsArr = words.split(" ");
  const newWordsArr = [];

  for (i = 0; i < wordsArr.length; i++) {
    if (!newWordsArr.includes(wordsArr[i])) {
      newWordsArr.push(wordsArr[i]);
    }
  }

  return newWordsArr.join(" ");
};

console.log(arrowRemoveDuplicates("the cat sat on the mat on the other cat"));
