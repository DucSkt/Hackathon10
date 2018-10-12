import { all, takeLatest } from 'redux-saga/effects';
import {
  watchFetchMaintainRequest,
  watchPostMaintainRequest,
  watchRemoveMaintainRequest
} from './maintain-sagas/MaintainRequestSaga';
import { watchFetchMaintainHistory } from './maintain-sagas/MaintainHistorySaga';

export default function* rootSaga() {
  yield all([
    // Maintain
    watchFetchMaintainRequest(),
    watchPostMaintainRequest(),
    watchRemoveMaintainRequest(),
    watchFetchMaintainHistory(),
 
  ]);
}
