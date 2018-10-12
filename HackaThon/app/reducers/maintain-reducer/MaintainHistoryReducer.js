import { 
    FETCH_API_MAINTAIN_HISTORY,
    FETCH_API_MAINTAIN_HISTORY_SUCCESS,
    FETCH_API_MAINTAIN_HISTORY_FAILED
     } from "../../actions/ActionTypes";
const INIT_STATE = {
    data: null,
    error: null,
    fetching: false
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case FETCH_API_MAINTAIN_HISTORY:
        return {
            data: null,
            error: null,
            fetching: true
          };
        case FETCH_API_MAINTAIN_HISTORY_SUCCESS:
        return {
            data: action.payload,
            error: null,
            fetching: false
          };

        case FETCH_API_MAINTAIN_HISTORY_FAILED:
        return {
        data: null,
        error: action.payload,
        fetching: false
        };
        default:
            return state;
    }
}