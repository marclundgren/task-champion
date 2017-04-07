/* eslint import/no-unresolved: 0 */
import { connect } from 'react-redux';
import { clearCompleted } from '../actions';
import Footer from '../components/Footer';

const mapStateToProps = ({ todos }) => (
  { hasTodos: todos.length > 0 }
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
)(Footer);
