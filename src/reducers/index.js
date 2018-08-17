import { combineReducers } from 'redux';
import clubsReducer from './reducer_clubs';

const rootReducer = combineReducers({
    clubs: clubsReducer
});

export default rootReducer;