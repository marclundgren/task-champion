/* eslint import/no-unresolved: 0 */
import { connect } from 'react-redux';
import { toggleAllCompleted, toggleAllInProgress } from '../actions';
import ToggleTodos from '../components/ToggleTodos';

const mapStateToProps = ({ todos }) => (
  {
    allTodosCompleted: todos.every(({ completed }) => (completed)),
    hasTodos: todos.length > 0,
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onToggleAllCompleted: () => (
      dispatch(toggleAllCompleted())
    ),
    onToggleAllInProgress: () => (
      dispatch(toggleAllInProgress())
    ),
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleTodos);
