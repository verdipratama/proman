/**
|--------------------------------------------------
| Project Reducer
|--------------------------------------------------
*/

const projectState = {};

export const projectReducer = (state = projectState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      // action.project dari action.js
      console.log('created projects', action.project);
      return state;

    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;

    default:
      return state;
  }
};

/**
|--------------------------------------------------
| Auth Reducer
|--------------------------------------------------
*/

const authState = {
  authError: null
};

export const authReducer = (state = authState, action) => {
  switch (action.type) {
    case 'LOGIN_ERROR':
      console.log('Upss, Login error....');
      return {
        ...state,
        authError: 'CEK EMAIL DAN PASSWORD GOBLOK!!!!!'
      };
    case 'LOGIN_SUCCESS':
      console.log('YESSSS, Login BERHASIL....');
      return {
        ...state,
        authError: null
      };
    case 'SIGNOUT_SUCCESS':
      console.log('SIGNOUT....SUCCESS');
      return state;

    default:
      return state;
  }
};
