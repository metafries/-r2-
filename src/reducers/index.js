import { combineReducers } from 'redux';
import ClubsReducer from './reducer_clubs';
import ActiveClub from './reducer_active_club';

const rootReducer = combineReducers({
    clubs: ClubsReducer,
    activeClub: ActiveClub
});

export default rootReducer;