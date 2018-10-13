import {delay} from 'redux-saga';
import {put, call, select, take, takeLatest, takeEvery, all} from 'redux-saga/effects';
import {searchEndpoint, bizEndpoint, suggestEndpoint} from '../index'
import * as actions from './actions/Actions'

export const getDataState = (state) => state.businessList;

function getEndpointData(endpoint, params) {
    return new Promise(function (resolve, reject) {
        fetch(endpoint, params).then((response) => {
            return response.json();
        }).then((respJson) => {
            resolve(respJson);
        });
    });
}

function* requestAutoSuggests(action) {

    let tempTerms = [], tempCats = [], tempBizs = [];

    let i;
    for (i = 0; i < 5; i++) {
        tempTerms[i] = {name: '------'};
        tempCats[i] = {name: '------'};
        tempBizs[i] = {name: '------'};
    }

    if (action.data !== '') {
        const fetchParams = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: action.data,
            }),
            method: 'POST'
        };

        let suggestions = yield call(getEndpointData, suggestEndpoint, fetchParams);
        if (suggestions.terms) {
            for (i = 0; i < suggestions.terms.length; i++) {
                tempTerms[i] = {name: suggestions.terms[i].text};
            }
        }
        if (suggestions.categories) {
            for (i = 0; i < suggestions.categories.length; i++) {
                tempCats[i] = {name: suggestions.categories[i].title};
            }
        }
        if (suggestions.businesses) {
            for (i = 0; i < suggestions.businesses.length; i++) {
                tempBizs[i] = {name: suggestions.businesses[i].name};
            }
        }
    }
    yield put(actions.responseAutoSuggests({
        categories: tempCats,
        businesses: tempBizs,
        terms: tempTerms,
    }));
    yield call(requestBusinessList, action);
}

function* requestBusinessList(action) {

    let tempBizList = [];
    let i;
    for (i = 0; i < 5; i++) {
        tempBizList[i] = {name: '------'};
    }

    if (action.data !== '') {

        const fetchParams = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: action.data,
            }),
            method: 'POST'
        };

        let bizData = yield call(getEndpointData, searchEndpoint, fetchParams);
        if (bizData.businesses) {
            for (i = 0; i < bizData.businesses.length; i++) {
                tempBizList[i] = {
                    name: bizData.businesses[i].name,
                    id: bizData.businesses[i].id
                };
            }
        }
    }
    yield put(actions.responseBusinessList(tempBizList));
}

function* requestBusinessInfo(action) {
    // get the state so we can find the businessId from the array
    let dataState = yield select(getDataState);
    console.log("Business: " + dataState[action.data].name + " id: " + dataState[action.data].id);

    const fetchParams = {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            businessId: dataState[action.data].id,
        }),
        method: 'POST'
    };

    let bizDetails = yield call(getEndpointData, bizEndpoint, fetchParams);
    yield put(actions.responseBusinessInfo(bizDetails));

}

export default function* rootSaga() {
    yield takeLatest(actions.requestAutoSuggests().type, requestAutoSuggests);
    yield takeLatest(actions.requestBusinessList().type, requestBusinessList);
    yield takeLatest(actions.requestBusinessInfo().type, requestBusinessInfo);
}
