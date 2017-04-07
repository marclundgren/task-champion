/* eslint import/no-unresolved: 0 */
import { connect } from 'react-redux';
import { clearCompleted } from '../actions';
import ClearCompleted from '../components/ClearCompleted';

const mapStateToProps = ({ todos }) => (
  { hasCompletedTodos: todos.some(({ completed }) => (completed)) }
);

const mapDispatchToProps = (dispatch) => (
  {
    onClearCompleted: () => {
      dispatch(clearCompleted());
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearCompleted);
