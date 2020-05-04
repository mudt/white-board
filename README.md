# WhiteBoard

ホワイトボード。

[元ネタ](https://qiita.com/numanomanu/items/e0ace008565164c17b75#step2-drag-on-drop-%E3%81%A7%E4%BD%8D%E7%BD%AE%E3%82%92%E5%A4%89%E6%9B%B4%E3%81%99%E3%82%8B) を見て作ってみようと思った。

元はReactでしたが、Angularで作りなおしました。
デモとしてホスティングしようと思いましたが面倒なので放置。

![動作サンプル](./white-board-sample.gif)


## できる事

- 付箋の追加
- 付箋内容の編集
- 付箋の削除
- 付箋の色変更
- 付箋の移動
- 付箋のリサイズ

保存は簡易的に `localStorage` にしています。


## やってみたかったけど未実装

- 付箋の重なり優先度の変更
- Firebaseの `realtime database` を使った複数人での編集対応


## ビルド

本プロジェクトを `clone` して次のコマンドでローカル上で動かせます。

```zsh
cd [workspace] && npm install
npm run start
```

「Compiled successfully.」が表示されたら、ブラウザで `http://localhost:4200/` にアクセスしてください。

確認はChromeでのみ行なっています。


## 必要条件

- Node 10.13 or later  
  私は `12.14.0` にて開発しました。


## 学び

- NgRx [[URL](https://ngrx.io)]
- angular/material の DragAndDrop [[URL](https://material.angular.io/cdk/drag-drop/overview)]
- FontawesomeのAngular対応 [[URL](https://fontawesome.com/how-to-use/on-the-web/using-with/angular)]
- CSS-Element-Queriesを使ったリサイズの監視 [[URL](https://github.com/marcj/css-element-queries)]
- RGB(hex)からHSLへの変換