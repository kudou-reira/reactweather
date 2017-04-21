import { combineReducers } from 'redux';
import TenkiReducer from './reducer_tenki';

const rootReducer = combineReducers({
  weather: TenkiReducer
});

export default rootReducer;
