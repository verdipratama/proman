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

    // Menambahkan ini agar tau nama yang ngepost
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection('projects')
      .add({
        // separated operator
        // ...project dari parameter
        // dan dari state CrateProject.js
        ...project,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
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

export function register(newUser) {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        return firestore
          .collection('users')
          .doc(res.user.uid)
          .set({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            initials: newUser.firstName[0] + newUser.lastName[0]
          });
      })
      .then(() => {
        dispatch({ type: 'REGISTER_SUCCESS' });
      })
      .catch(err => {
        dispatch({ type: 'REGISTER_ERROR', err });
      });
  };
}
