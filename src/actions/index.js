import axios from 'axios';

//http://api.openweathermap.org/data/2.5/forecast?q=tokyo,jp&appid=5d6e5f8dc3142dd117496bcde0ad6ceb

const weatherAPIKEY = "5d6e5f8dc3142dd117496bcde0ad6ceb";
const weatherURL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + weatherAPIKEY;

export const GET_WEATHER = "GET_WEATHER";


export function findWeather(city){
    
    const weatherCityUrl = weatherURL + "&q=" + city + ",JP";
    const getLinkData = axios.get(weatherCityUrl);
    
    console.log("returned data:", getLinkData);
    
    return {
        type: GET_WEATHER,
        payload: getLinkData
    };
    
}
