import {combineReducers} from 'redux';


import defaultReducer from './default/defaultReducer';
import productReducer from './products/productReducer';

const rootReducer = combineReducers({
    default: defaultReducer,
    products: productReducer,
    
});

export default rootReducer;

