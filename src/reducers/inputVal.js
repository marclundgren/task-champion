const inputVal = (state = '', action) => {
  switch (action.type) {
    case 'SET_INPUT_VALUE':
      return action.val;
    default:
      return state;
  }
};

export default inputVal;
