import {connect} from 'react-redux';
import Calculator from '../components/calculator/calculator';

const mapStateToProps = (state) => {
  return {
    data: state.calculator
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCalculator: (data) => {
      dispatch({type: 'UPDATE_CALCULATOR', payload: {calculator: data}});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);