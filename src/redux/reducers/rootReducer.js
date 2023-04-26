import { combineReducers } from "redux";
import productReducer from "./product";
import userReducer from "./users";

const rootReducer = combineReducers({
  product: productReducer,
  users: userReducer,
});

export default rootReducer;
