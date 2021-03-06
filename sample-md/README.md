# はじめに
型定義ファイルや本ライブラリを利用する場合、  
スターターキット(本フォルダ)をベースにはじめることを推奨します。  

# サンプル
 * [simpleフォルダ](./simple/)  
  「enchant.jsの型定義ファイル」を使ったサンプル
 * [use-frameworkフォルダ](./use-framework/)  
  「より快適にTypeScriptでenchant.js利用するためのライブラリ」を使うサンプル  
  * ライブラリのAPIドキュメントは[docフォルダ](./doc)をご覧ください

# ビルド方法
1. npmでビルドする方法  
 npm installした上で、下記を実行してください。  
   * ```npm run build ``` (または ```gulp ```) すべてのサンプルををビルドします。
   * ```gulp buildSimple``` simpleフォルダのサンプルをビルドします。
   * ```gulp buildUseFramework``` use-frameworkフォルダのサンプルをビルドします。

1. VisualStudioでビルドする場合
 1. VisualStudioでTypeScriptプロジェクトを作成してください。
 1. スターターキット(本フォルダ)のサンプルフォルダをTypeScriptプロジェクトのフォルダにコピーします。
 1. VisualStudioのソリューションエクスプローラーで「プロジェクトに含める」を選択し本フォルダをプロジェクトに含めてください。
 1. TypeScriptプロジェクトのビルドをします。

# License
MIT license.
