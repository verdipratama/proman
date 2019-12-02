const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

/**
|--------------------------------------------------
| ADD NOTIFICATIONS TRIGGERS
|--------------------------------------------------
*/

const createNotification = notification => {
  return admin
    .firestore()
    .collection('notifications')
    .add(notification)
    .then(doc => console.log('notifications added', doc));
};

exports.projectCreated = functions.firestore
  // Foe Projects
  .document('projects/{projectId}')
  .onCreate(doc => {
    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNotification(notification);
  });

/**
|--------------------------------------------------
| Auth Trigger for New User
|--------------------------------------------------
*/

exports.userJoined = functions.auth
  // Auth
  .user()
  .onCreate(user => {
    return admin
      .firestore()
      .collection('users')
      .doc(user.uid)
      .get()
      .then(doc => {
        const newUser = doc.data();
        const notification = {
          content: 'Joined the party',
          user: `${newUser.firstName} ${newUser.lastName}`,
          time: admin.firestore.FieldValue.serverTimestamp()
        };

        return createNotification(notification);
      });
  });
