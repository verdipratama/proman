## TODO - Part 1 Setup UI

- [x] Setup all components { Auth, Dashboard, Layout, Projects }
- [x] Install react-router-dom

## Part 2 - Navbar Component

- [x] Wrap <BrowserCompnent> at index.js
- [x] Setup Navbar.js && Import Link
- [x] Nesting Navbar at index.js
- [x] Setup SignedinLinks and SignedOutLinks nesting to Navbar.js

## Part 3 Dashboard Component

- [x] Setup Dashboard.js && Notifications.js
- [x] Nesting Notification.js to Dashboard.js
- [x] Setup ProjectList.js
- [x] Nesting ProjectList.js to Dashboard.js
- [x] Import Switch Route Dashboard in index.js

## Part 4 Project Summary Component

- [x] Setup ProjectSummary.js
- [x] Nesting ProjectSummary.js to ProjectList.js

## Part 5 Project Details Component

- [x] Setup ProjectDetails.js
- [x] Import & route ProjectDetails.js to index.js
- [x] Testing route http://localhost:3000/project/testing
- [x] Make sure exact in '/' dashboard

## Part 6 Sign & Signup & Create Project

- [x] Setup Sign.js && Register.js
- [x] Setup logic handleSubmit and handleChange Sign.js && Register.js
- [x] Setup CreateProject.js
- [x] Setup logic handleSubmit and handleChange CreateProject.js

## Part 7 Add Redux & Reducers

- [x] Install Redux & react-redux
- [x] Setup store.js & Import {createStore} from redux & call createStore()
- [x] Setup combinereducer() at store/index.js
- [x] Make authReducer & projectReducer function at reducer.js
- [x] Import rootreducer() from store/index.js to store.js
- [x] Wrap Provider and Store index.js

## Part 8 Add Dummy Data Reducer

- [x] Add dummy data projectReducer at reducer.js {projects:}
- [x] Import {connect} react-redux at Dashboard.js
- [x] Create function mapStateToProps()
- [x] clog(this.props)
- [x] Passing data to ProjectList.js with props <ProjectList projectlist={tampilProject} />
- [x] Setup ProjectList.js with projectList props and .map()
- [x] Passing data ProjectList.js to ProjectSummary with props and call array with {title, content} direcly output

## Part 9 Async Code with redux-thunk (middleware)

- [x] import applyMiddleware, thunk 'redux-thunk' and call applyMiddleware()
- [x] Setup action creator createProject() in action.js
- [x] Setup CreateProject.js import {connect} & {createProject} at action.js
- [x] Create mapDispatchToProps()
- [x] Setup Project action with switch case at reducer.js

## Part 10 Creating a Firebase Project

- [x] install -> yarn add firebase
- [x] Import firebase and Create config files firebase.js
- [x] Firestore data & collections step by step

1. Create Database in firebase.google.com
2. Choose cloud firestore or realtime database
3. Choose cloud firestore and start in test mode
4. Add collection projects -> title -> content

## Part 11 Connecting Redux to Firebase

- [x] install -> yarn add react-redux-firebase redux-firestore (binding to database) it's mean using this library is to using firebase API inside action creator and sync our database to react store.
- [x] Setup store.js
- [x] import { getFirebase }, { reduxFirestore, getFirestore }
- [x] compose (compose sama aja seperti combine) and appy middleware thunk.withExtraArgument call getFirebase, getFirestore to allow in (action.js)
- [x] call reduxFirestore(FBConfig)

- [x] 2019 UPDATE 3RD LIBRARY
- [x] Edit index.js and add all configuration [Syncing Data with Firestore]
- [x] wrap ReactReduxFirebaseProvider {...rrfProps}

## Part 12 Adding Data to Firestore

- [x] Setup action.js and create getFirebase, getFirestore object
- [x] Create getFirestore();
- [x] Setup firestore API .collection().add()
- [x] Setup reducer.js to handle action CREATE_PROJECT, CREATE_PROJECT_ERROR

## Part 13 Syncing / Show Data with Firestore

- [x] Setup index.js (store) import firestoreReducer and configure firestore property inside rootReducer
- [x] Setup Dashboard.js to show data from firebase
- [x] import {firestoreConnect} and compose
- [x] Configure mapStateToProps and export default

## Part 14 Project Details Data

- [x] Import {Link} and wrap at projectlist.js
- [x] Import {connect, firestoreconnect, compose} at projectdetails.js
- [x] First setup export default -> config mapStateToProps

## Part 15 Firebase Auth

- [x] Setup firebase authentification in firebase console
- [x] Open Authentication in firebase.com
- [x] Setup Email/Password
- [x] SETUP FIREBASE AUTH IN REDUX
- [x] Import firebaseReducer at index.js/reducer
- [x] Add property firebase to rootReducer({object})

## Part 16 Setup Login User

- [x] Create action creator for logIn at action.js
- [x] Config authReducer in reducer.js
- [x] Switch case LOGIN_ERROR and LOGIN_SUCCESS
- [x] Setup Login.js and import {connect} and { logIn }
- [x] Edit export default connect(mapstate, mapdispatch)
- [x] Setup mapdispatch first
- [x] Setup this.props.logIn(this.state);
- [x] Setup mapstate to show error
- [x] Setup authError props

## Part 17 Setup Logout

- [x] Create action creator for logOut at action.js
- [x] Add 'SIGNOUT_SUCCESS' at reducer.js
- [x] Setup SignedInLinks.js to setup logout
- [x] Setup Login.js and import {connect} and { logOut }
- [x] Setup mapDispatchToProps
- [x] IF DONT HAVE MAPSTATETOPROPS ADD (NULL) FIRST

## Part 18 Setup Navbar Login / logout Status

- [x] Setup Navbar.js and import {connect}
- [x] add mapStateToProps
- [x] Setup const {auth} form firebase property
- [x] Check console AND USE UUID from firebase object

## Part 19 Routing Guarding / Protecting Route

- [x] Create Routing.js with (HOC) for ...
- [x] Protect Dashboard.js
- [x] Protect CreateProject.js
- [x] Protect ProjectDetails.js
- [x] Protect Login.js auth: state.firebase.auth in mapStateToProps and destructing auth and then check if not uid redirect
- [x] Protect Register.js auth: state.firebase.auth in mapStateToProps and destructing auth and then check if not uid redirect.

## Part 20 User Register (Firebase Auth) and User Profile Data

- [x]
