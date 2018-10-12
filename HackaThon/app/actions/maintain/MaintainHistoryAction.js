import {FETCH_API_MAINTAIN_HISTORY,
    FETCH_API_MAINTAIN_HISTORY_SUCCESS,
    FETCH_API_MAINTAIN_HISTORY_FAILED
} from "../ActionTypes";
 
export const fetchAPIMaintainHistory = (from , size , locale , resolve , reject) => ({
    type: FETCH_API_MAINTAIN_HISTORY,
    from: from,
    size: size,
    locale: locale,
    resolve: resolve,
    reject: reject
  });
 
export const fetchAPIMaintainHistorySuccess = data => ({
    type: FETCH_API_MAINTAIN_HISTORY_SUCCESS,
    payload: data
  });
  
export const fetchAPIMaintainHistoryFailed = error => ({
    type: FETCH_API_MAINTAIN_HISTORY_FAILED,
    payload: error
  });
 