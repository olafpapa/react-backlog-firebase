const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('notification added', doc))
}

exports.projectCreated = functions.region('asia-northeast1').firestore
  .document('projects/{projectId}')
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: 'が新規プロジェクトを追加しました!',
      user: `${ project.authorLastName } ${ project.authorFirstName }`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
  })

exports.projectDeleted = functions.region('asia-northeast1').firestore
  .document('projects/{projectId}')
  .onDelete(doc => {
    const project = doc.data();
    const notification = {
      content: 'がプロジェクトを削除しました!',
      user: `${ project.authorLastName } ${ project.authorFirstName }`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
  })

exports.userJoined = functions.region('asia-northeast1').auth
  .user()
  .onCreate(user => {

    return admin.firestore().collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {
        const newUser = doc.data()
        const notification = {
          content: 'が加入しました!',
          user: `${newUser.lastName} ${newUser.firstName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification)
      })
  })
