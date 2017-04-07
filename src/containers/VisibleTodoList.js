/* eslint import/no-unresolved: 0 */
import { connect } from 'react-redux';
import { toggleTodo, removeTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = ({ todos, visibilityFilter }) => (
  {
    todos: getVisibleTodos(todos, visibilityFilter),
    hasCompletedTodos: todos.some(({ completed }) => (completed)),
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    onTodoClick: (id) => (
      dispatch(toggleTodo(id))
    ),
    onTodoDestroy: (id) => (
      dispatch(removeTodo(id))
    ),
  }
);

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;
