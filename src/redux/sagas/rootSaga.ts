import { all, fork } from "redux-saga/effects";
import { ordinalsWatcher } from "./ordinalsSaga";

export default function* root() {
    yield all([
        fork(ordinalsWatcher),
    ])
}