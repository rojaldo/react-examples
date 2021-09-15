import Heroes from '../components/heroes/heroes';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes.heroList,
    newHero: state.heroes.heroForm
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateHeroes: (heroes) => {
      dispatch({type: 'UPDATE_HERO_LIST', payload: {heroes: heroes}});
    },
    updateHeroForm: (hero) => {
      dispatch({type: 'UPDATE_HERO_FORM', payload: {newHero: hero}});
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);