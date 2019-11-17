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

## Connecting Redux to Firebase

- [x] install -> yarn add react-redux-firebase redux-firestore
- [x]
