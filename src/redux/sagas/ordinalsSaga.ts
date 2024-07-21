import { ApiClient, ordinalDetailApi, ordinalListApi } from "../../api";
import { ApiResponse } from "../../models";
import { CallEffect, PutEffect, call, put, takeLatest } from "redux-saga/effects";
import * as types from "../../redux/actionTypes";

function* fetchOrdinals({
    payload,
}: any): Generator<CallEffect<ApiResponse> | PutEffect<any> | CallEffect> {
    try {
        const response: any = yield call(ApiClient, ordinalListApi(payload.walletAddress, payload.offset = 30, payload.limit = 30))
        const data = response.data;
        yield put({
            type: types.FETCH_ORDINALS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: types.FETCH_ORDINALS_FAILURE,
            payload: error,
        });
    }
}

function* fetchOrdinalDetail({
    payload
}: any): Generator<CallEffect<ApiResponse> | PutEffect<any> | CallEffect> {
    try {
        const response: any = yield call(ApiClient, ordinalDetailApi(payload.inscriptionId, payload.walletAddress))
        const data = response.data;
        yield put({
            type: types.FETCH_ORDINAL_DETAIL_SUCCESS,
            payload: data,
        });
    } catch (error) {
        yield put({
            type: types.FETCH_ORDINAL_DETAIL_FAILURE,
            payload: error,
        });
    }
}

function* clearOrdinals({
    payload
}: any): Generator<CallEffect<ApiResponse> | PutEffect<any> | CallEffect> {

    yield put({
        type: types.CLEAR_ORDINALS,
        payload: [],
    });

}

export function* ordinalsWatcher() {
    yield takeLatest(types.FETCH_ORDINALS, fetchOrdinals)
    yield takeLatest(types.FETCH_ORDINAL_DETAIL, fetchOrdinalDetail)
    yield takeLatest(types.CLEAR_ORDINALS, clearOrdinals)
}