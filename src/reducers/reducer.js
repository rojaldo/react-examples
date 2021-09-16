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
    beers: {
        beerList: [],
        beersRange: [1, 4.5],
        beersOrder: 1
    },
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
        case 'UPDATE_BEERS_LIST':
            state.beers.beerList = action.payload.beers;
            return state;
        case 'UPDATE_BEERS_RANGE':
            state.beers.beersRange = action.payload.range;
            return state;
        case 'UPDATE_BEERS_ORDER':
            state.beers.beersOrder = action.payload.order;
            return state;


        default:
            return state;
    }
}