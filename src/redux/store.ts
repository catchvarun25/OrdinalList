import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import root from "./sagas/rootSaga";
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware()

const middleWares = [sagaMiddleware]

export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middleWares),
});

sagaMiddleware.run(root);

