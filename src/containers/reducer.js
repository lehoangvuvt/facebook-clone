import { combineReducers } from 'redux';
import globalReducer from './App/reducer';
import homeReducer from './Homepage/reducer';
import storiesInfoReducer from './StoryDetails/reducer';
import watchReducer from './WatchPage/reducer';


export const rootReducer = combineReducers({
    global: globalReducer,
    home: homeReducer,
    storiesInfo: storiesInfoReducer,
    watch: watchReducer,
});