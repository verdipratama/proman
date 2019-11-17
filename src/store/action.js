export function createProject(project) {
  // Jika menggunakan thunk harus return function
  return (dispatch, getState) => {
    // Async call to database
    dispatch({ type: 'CREATE_PROJECT', project });
  };
}
