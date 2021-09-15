import { Hero } from '../model/hero';

export const reducer = (state = {
    heroes: {
        heroList: [new Hero('Batman', 'dark knight'), new Hero('Superman', 'man of steel'), new Hero('Robin', '')],
        heroForm: { name: 'Thor', description: 'God of Thunder' }
    },
    calculator: {
        currentState: 0,
        firstFigure: 0,
        secondFigure: 0,
        result: 0,
        operator: '',
        display: ''
    },
    beers: {},
    apod: {}
}, action) => {
    switch (action.type) {
        case 'UPDATE_HERO_LIST':
            state.heroes.heroList = action.payload.heroes;
            return state;
        case 'UPDATE_HERO_FORM':
            state.heroes.heroForm = action.payload.newHero;
            return state;
        case 'UPDATE_CALCULATOR':
            state.calculator = action.payload.calculator;
            return state;
        default:
            return state;
    }
}