import { combineReducers } from 'redux';
import ImageReducer from './reducer_images';

const rootReducer = combineReducers({
  cats: ImageReducer
});

export default rootReducer;
