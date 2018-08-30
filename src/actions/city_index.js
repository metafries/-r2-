import axios from 'axios';

const API_KEY = '9e2896b8d57def4f2ff602d27aee841b'
const ROOT_URL = `https://openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: 'FETCH_WEATHER',
        payload: request
    };
}