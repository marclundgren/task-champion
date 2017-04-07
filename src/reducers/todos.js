const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
      });

    default:
      return state;
  }
};
const defaultState = [
  {
    id: 97,
    text: 'Buy milk',
    completed: false,
  },
  {
    id: 98,
    text: 'Finish taxes',
    completed: false,
  },
  {
    id: 99,
    text: 'Feed the dog',
    completed: true,
  },
];

const todos = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':

      if (!action.text) {
        return state;
      }

      return [
        ...state,
        todo(undefined, action),
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    case 'TOGGLE_ALL_TODOS': {
      const allCompleted = state.every((item) => (item.completed));

      return state.map(({ id, text }) => ({ completed: !allCompleted, id, text }));
    }
    case 'TOGGLE_ALL_TODOS_COMPLETED': {
      return state.map(({ id, text }) => ({ completed: true, id, text }));
    }
    case 'TOGGLE_ALL_TODOS_IN_PROGRESS': {
      return state.map(({ id, text }) => ({ completed: false, id, text }));
    }
    case 'REMOVE_COMPLETED_TODOS': {
      return state.filter((item) => (!item.completed));
    }
    case 'REMOVE_TODO': {
      return state.filter((item) => (item.id !== action.id));
    }
    default:
      return state;
  }
};

export default todos;
