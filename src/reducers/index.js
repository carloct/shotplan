import { combineReducers } from 'redux';
import LocationReducer from './LocationReducer';

export default combineReducers({
	locations: LocationReducer
});