import { combineReducers } from 'redux';

import { ordinalsReducer } from './ordinalsReducer';
import { ordinalListReducer } from './ordinalListReducer';

const rootReducer = combineReducers({
    ordinals: ordinalsReducer,
    ordinalList: ordinalListReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
