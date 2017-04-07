/* eslint import/no-unresolved: 0 */
import { connect } from 'react-redux';
import { addTodo, setInputValue } from '../actions';
import AddTodo from '../components/AddTodo';

const mapStateToProps = (state) => (
  { inputVal: state.inputVal }
);

const mapDispatchToProps = (dispatch) => (
  {
    changeInputVal: (inputVal) => {
      dispatch(setInputValue(inputVal));
    },
    addTodo: (text) => {
      dispatch(addTodo(text));
      dispatch(setInputValue(''));

      /*
      setTimeout(() => {
      }, 100);
      */
    },
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTodo);
