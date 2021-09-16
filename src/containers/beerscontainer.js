import Beers from '../components/beers/beers';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    beersProp: state.beers.beerList,
    rangeProp: state.beers.beersRange,
    orderProp: state.beers.beersOrder,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateBeers: (beers) => {
      dispatch({type: 'UPDATE_BEERS_LIST', payload: {beers}});
    },
    updateRange: (range) => {
      dispatch({type: 'UPDATE_BEERS_RANGE', payload: {range}});
    },
    updateOrder: (order) => {
      dispatch({type: 'UPDATE_BEERS_ORDER', payload: {order}});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Beers);