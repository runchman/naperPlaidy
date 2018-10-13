import {initialDataState} from "../../index";
import * as actions from '../actions/Actions';


function mainDataReducer(state = initialDataState, action) {
    switch (action.type) {
        case actions.responseAutoSuggests().type:
            return Object.assign({}, state, {
                autoSuggests: action.data,
            });
        case actions.requestBusinessInfo().type:
            return Object.assign({}, state, {
                uiState: 'bizInfo',
                infoLoading: true,
            });
        case actions.responseBusinessInfo().type:
            return Object.assign({}, state, {
                businessInfo: action.data,
                infoLoading: false,
            });
            return state;
        case actions.responseBusinessList().type:
            return Object.assign({}, state, {
                businessList: action.data,
            });
        case actions.returnToSearch().type:
            return Object.assign({}, state, {
                uiState: 'bizSearch',
            });
    }
    return state;
}

export default mainDataReducer;
