import { combineReducers } from "redux";

import cart from "./cart/reducer";
import product from "./product/reducer";

export default combineReducers({ cart, product });
