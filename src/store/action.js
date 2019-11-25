/**
|--------------------------------------------------
| Project Action
|--------------------------------------------------
*/
export function createProject(project) {
  // Jika menggunakan thunk harus return function
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Async call to database
    const firestore = getFirestore();

    firestore
      .collection('projects')
      .add({
        // separated operator
        // ...project dari parameter
        // dan dari state CrateProject.js
        ...project,
        authorFirstName: 'Proman',
        authorLastName: 'Master',
        authorId: 123,
        createdAt: new Date()
      })
      // callback function untuk submit project
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project });
      })
      // callback function jika error
      .catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
}

/**
|--------------------------------------------------
| Auth Action
|--------------------------------------------------
*/
export function logIn(credentials) {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    // FIREBASE API
    firebase
      .auth()
      .signInWithEmailAndPassword(
        // parameter and firebase API
        credentials.email,
        credentials.password
      )
      .then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  };
}

export function logOut() {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' });
      });
  };
}
