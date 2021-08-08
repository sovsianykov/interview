import { apiAction } from "./actions";
import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";
import {DELETE_lIST, FETCH_DATA, POST_LIST} from "./types";

export function* watchFetch() {
    yield takeEvery( FETCH_DATA, fetchWorkerAsync);
yield takeEvery( POST_LIST, postWorkerAsync);
    yield takeEvery( DELETE_lIST, deleteWorkerAsync);
}

function* fetchWorkerAsync({ url }) {
    try {
        yield put(apiAction.fetchStart());
        const data = yield call(() => {
            return axios.get(url).then((res) => res.data);
        });
        yield put(apiAction.fetchSuccess(data));
    } catch (error) {
        yield put(apiAction.errorMessage());
    }
}
function* postWorkerAsync({ url,body }) {
    try {
        yield put(apiAction.fetchStart());
        const data = yield call(() => {
            return axios.post(url,body).then((res) =>console.log( res));
        });
        yield put(apiAction.fetchSuccess(data));
    } catch (error) {
        yield put(apiAction.errorMessage());
    }
}

function* deleteWorkerAsync({ url,id }) {
    try {
        yield put(apiAction.fetchStart());
        const data = yield call(() => {
            return axios.delete(url,id).then((res) => res.data);
        });
        yield put(apiAction.fetchSuccess(data));
    } catch (error) {
        yield put(apiAction.errorMessage());
    }
}
