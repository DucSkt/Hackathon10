import {
  fetchAPIMaintainHistorySuccess,
  fetchAPIMaintainHistoryFailed
}from "../../actions";
import {takeEvery , takeLatest , put ,call} from "redux-saga/effects";
// import APIWorker from '../../services/APIWorker';
import {
  FETCH_API_MAINTAIN_HISTORY
} from '../../actions/ActionTypes';
function* fetchApi(action) {
  try {
 
  
  } catch (error) {
  
  }
}

export function* watchFetchMaintainHistory() {
     yield takeLatest(FETCH_API_MAINTAIN_HISTORY, fetchApi);
}


  