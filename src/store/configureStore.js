import {createStore, combineReducers} from 'redux';
import placesReducers from './reducers/places';

const rootReducers = combineReducers({
        places : placesReducers
    });


    const configureStore = () => 
    {
        return createStore(rootReducers);
    };