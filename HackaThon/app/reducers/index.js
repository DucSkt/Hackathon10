import { combineReducers } from 'redux';
import MaintainRequestReducer from './maintain-reducer/MaintainRequestReducer';
import MaintainHistoryReducer from './maintain-reducer/MaintainHistoryReducer';
 

export default combineReducers({
 
  MaintainRequest : MaintainRequestReducer,
  MaintainHistory : MaintainHistoryReducer,

});
