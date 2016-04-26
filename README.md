# はじめに
「Markdownをもとにhtmlを作成する」テストです。  
処理結果はdist/README.htmlを参照してください。  
サンプルのMarkdownは下記のものです。  
[https://github.com/kazenetu/enchantjs-typescript内のスターターキットのREADME.md](https://github.com/kazenetu/enchantjs-typescript/blob/master/starter/README.md)

## ビルド方法
```npm install``` した上で、 ```gulp ``` を実行してください。  

## 処理概要
下記を実行しています。
1. gulp-markdownでsample-md/README.mdファイルをhtmlに変換、tempフォルダに出力
1. gulp-pugでlib/README.pugを出力  
※README.pug内でtemp/README.htmlを読み込み

# License
MIT license.
