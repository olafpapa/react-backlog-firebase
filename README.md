
## 概要

### フロントエンド
- [React](https://github.com/facebook/react)
- [React Redux](https://react-redux.js.org/)
- [redux-thunk](https://github.com/reduxjs/redux-thunk)
- [react-redux-firebase](https://github.com/prescottprue/react-redux-firebase)
- [Materialize](https://materializecss.com/) (Meterial Design)

### バックエンド
- Firebase Authentication（Email・パスワード認証）
- Cloud Firestore (users, projects)
- Cloud Functions
- Hosting（デプロイ先として使う）

### テスト
- [Jest](https://jestjs.io/ja/)
- [Enzyme](https://airbnb.io/enzyme/)

## 環境
- Node v10.16.0
- create-react-app

## Firebaseの設定

### Firebaseコンソール
- Firebaseコンソールでプロジェクトを作成しウェブアプリを追加 
- Authentication, Database(Cloud Firestore), Functions, Hostingを有効にする
- Databaseの「ルール」タブでアクセス権限を設定
```
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{project} {
      allow read, write: if request.auth.uid != null
    }
    match /users/{userId} {
      allow create
      allow read: if request.auth.uid != null
      allow write: if request.auth.uid == userId
    }
    match /notifications/{notification} {
      allow read: if request.auth.uid != null
    }
  }
}
```
- プロジェクトの設定 ＞ Firebase SDK snippetから構成情報をコピーして`config/firebase.js`の`export const firebaseConfig`を上書きする
<img width="620" alt="firebaseConfig" src="https://user-images.githubusercontent.com/50685640/60190688-0b9a5900-986e-11e9-88af-bab539a18bdc.png">

### 開発環境
Firebaseコマンドをインストール。
```
npm install -g firebase-tools
```

ソースコードのディレクトリで、Firebaseのセットアップ。
```
firebase login
firebase init
```
どのFirebaseサービスと関連付けるかを聞かれるので、FunctionsとHostingをスペースキーで選択。
```
? Which Firebase CLI features do you want to set up for this folder? Press Space to select features, then Enter to confirm your choices. (Press <space> to select, <a> to toggle all, <i> to invert selection)
 ◯ Database: Deploy Firebase Realtime Database Rules
 ◯ Firestore: Deploy rules and create indexes for Firestore
 ◉ Functions: Configure and deploy Cloud Functions
❯◉ Hosting: Configure and deploy Firebase Hosting sites
 ◯ Storage: Deploy Cloud Storage security rules
```

Functionsの言語は`Javascript`を選択。
```
? What language would you like to use to write Cloud Functions? JavaScript
```
deployするファイルを配置する場所は`public`ではなく`dist`に変更する。
```
? What do you want to use as your public directory? (public) 
```
その他の設問はお好みで。

### Functions
Firebase Functionsのコードはfunctionsディレクトリにある。
```
cd functions
npm install
```

## ローカルで実行
```
npm install
npm start
```

## ビルド
```
npm run build
```

### デプロイ
```
npm run deploy
```

### テスト
```
npm test
```
