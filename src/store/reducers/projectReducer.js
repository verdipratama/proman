const initState = {
  projects: [
    {
      id: '1',
      title: 'Help me find peach',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quis harum non'
    },
    {
      id: '2',
      title: 'Collect all the Stars',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quis harum non'
    },
    {
      id: '3',
      title: 'Testing',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quis harum non'
    }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      // action.project dari action.js
      console.log('created projects', action.project);
      // return {
      //   ...state
      // };
      return state;

    default:
      return state;
  }
};

export default projectReducer;
