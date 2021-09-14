import {Hero} from '../model/hero';

export const reducer = (state = {
    heroes: {
        heroList: [new Hero('Batman', 'dark knight'), new Hero('Superman', 'man of steel'), new Hero('Robin', '')],
        heroForm: {name: 'Thor', description: 'God of Thunder'}
    }, 
    calculator: {}, 
    beers: {},
    apod: {}
}, action) => {
    switch (action.type) {
        case 'UPDATE_HERO_LIST':
            state.heroes.heroList = action.payload.heroes;
            return state;
        default:
            return state;
    }
}