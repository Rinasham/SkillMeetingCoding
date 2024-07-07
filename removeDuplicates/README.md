# JS メソッドの問題

---

## 確認項目

[ HTML ]
・テンプレートのショートカット

[ JS ]
・配列
・for 文
・console.log
・関数

・JS 使用メソッド

1. split("区切る箇所の文字列")：文字列を分割する
2. includes(要素 or 文字列)：特定の要素が配列や文字列に含まれているかどうかを判定
3. push()：配列に要素を追加
4. join("結合に使う文字列")：配列を結合して文字列に変換

---

## 受講生への指示

1. removeDuplicates というディレクトリを作成し、その中に入ってください。
2. （以下を removeDuplicates ディレクトリで作業をしてください。）
3. "index.html"という名前で html ファイルを作成してください。
4. その html ファイルに html のテンプレートをショートカットで作成してください。
5. index.html と同じ階層に"script.js"という名前で js ファイルを作成してください。
6. 作成した index.html に script.js を埋め込んで呼び出せるようにしてください。
7. 文字列から重複する単語をすべて削除し、単一単語（各単語の最初の出現箇所）のみを含む新しい文字列をコンソールに表示させる関数を script.js に書いてください。
8. html ファイル上で VSCode の「Go Live」ボタンを押してもらうと、Live Server が開く
9. 検証ツールを開く（Command + Option + i）
10. 「コンソール」で'the cat sat on mat other'が表示されているか確認

<!--
removeDuplicates('the cat sat on the mat on the other cat')
==> 'the cat sat on mat other'を返す（重複した単語をなくす）

-->

## ゴール

'the cat sat on mat other'が検証ツールのコンソール内に表示されれば OK

## 宿題

1. script.js に作った関数は console.log に表示させるだけなので、それを html を使って画面上に表示させる。
2. 作成した関数をアロー関数に書き換える
