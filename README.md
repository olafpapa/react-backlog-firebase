
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
- Cloud Functions (今後)

## 環境
- Node v10.16.0
- create-react-app

## Firebaseの設定
- Firebaseでプロジェクトを作成しウェブアプリを追加 
- AuthenticationとDatabase(Cloud Firestore)を有効にする
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
  }
}
```
- プロジェクトの設定 ＞ Firebase SDK snippetから構成情報をコピーして`config/firebase.js`の`export const firebaseConfig`を上書きする
<img width="620" alt="firebaseConfig" src="https://user-images.githubusercontent.com/50685640/60190688-0b9a5900-986e-11e9-88af-bab539a18bdc.png">

## 実行
```
npm install
npm start
```
