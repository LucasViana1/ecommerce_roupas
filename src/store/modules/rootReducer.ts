import { combineReducers } from 'redux';

import cart from './cart/reducer';
import product from './product/reducer';
import search from './search/reducer';

export default combineReducers({ cart, product, search });
