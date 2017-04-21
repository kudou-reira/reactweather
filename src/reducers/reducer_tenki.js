import {GET_WEATHER} from '../actions/index';

export default function(state = [], action){
    
    switch (action.type) {
        
        case GET_WEATHER:
            //only "data" has list of city with forecast
            return state.concat([action.payload.data]);
            return [action.payload.data, ...state]; // flatten array...i think [city, city, city]
    }
    //console.log("Action:", action);
    return state;
}