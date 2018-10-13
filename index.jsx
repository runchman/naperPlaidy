import React from "react"
import ReactDOM from "react-dom";
import MainComponent from "./components/containers/MainComponent.jsx";
import "regenerator-runtime/runtime";
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import mainReducer from "./components/reducers/MainReducer";
import rootSaga from "./components/sagas"
import createSagaMiddleware from 'redux-saga';

require('../scss/app.scss');

let initialDataState = {
    uiState: 'bizSearch',   // bizSearch or bizInfo
    infoLoading: false,
    autoSuggests: {
        categories: [
            {name: '---'},
            {name: '---'},
            {name: '---'},
            {name: '---'},
            {name: '---'},
        ],
        businesses: [
            {name: '---'},
            {name: '---'},
            {name: '---'},
            {name: '---'},
            {name: '---'},
        ],
        terms: [
            {name: '---'},
            {name: '---'},
            {name: '---'},
            {name: '---'},
            {name: '---'},
        ],
    },
    businessList: [         // 5 business listings
        {name: '---'},
        {name: '---'},
        {name: '---'},
        {name: '---'},
        {name: '---'},
    ],
    businessInfo: {},       // info for selected business
};

const searchEndpoint = "https://simplserve.com/yelpsearch";
const suggestEndpoint = "https://simplserve.com/yelpsuggest";
const bizEndpoint = "https://simplserve.com/yelpbizinfo";

export {initialDataState,searchEndpoint,bizEndpoint, suggestEndpoint}


/*
const reducers = combineReducers({
    cachedData: cachedDataReducer,
});
*/
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    mainReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MainComponent/>
    </Provider>,
    document.getElementById('main-container'),
);



