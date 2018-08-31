import { combineReducers } from 'redux';
import WeatherReducer from '../reducers/reducer_weather';

const rootReducer = combineReducers({
    weather: WeatherReducer
});

export default rootReducer;