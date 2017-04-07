/* eslint import/no-unresolved: 0 */
import React, { PropTypes } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Todo from './Todo';
import TodoCount from '../containers/TodoCount';
import ClearCompleted from '../containers/ClearCompleted';

const componentStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  clearCompletedContainer: {
    flex: 0.15,
  },
});

const clearCompleted = () => (
  <View style={componentStyles.clearCompletedContainer}>
    <ClearCompleted />
  </View>
);

const TodoList = ({ todos, onTodoClick, onTodoDestroy, hasCompletedTodos }) => {
  if (!todos.length) {
    return (<ScrollView />);
  }

  const clearCompletedComponent = hasCompletedTodos ? clearCompleted() : null;

  return (
    <View style={componentStyles.container}>
      <ScrollView>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onToggle={() => onTodoClick(todo.id)}
            onDestroy={() => onTodoDestroy(todo.id)}
          />
        )}
        <TodoCount />
      </ScrollView>
      {clearCompletedComponent}
    </View>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onTodoDestroy: PropTypes.func.isRequired,
  hasCompletedTodos: PropTypes.bool.isRequired,
};

export default TodoList;
