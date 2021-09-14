import Heroes from '../components/heroes/heroes';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes.heroList,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHeroes: (heroes) => {
      dispatch({type: 'UPDATE_HERO_LIST', payload: {heroes: heroes}});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);