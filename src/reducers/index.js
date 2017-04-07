/* eslint import/no-unresolved: 0 */
import { combineReducers } from 'redux';
import inputVal from './inputVal';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

const todoApp = combineReducers({
  inputVal,
  todos,
  visibilityFilter,
});

export default todoApp;
