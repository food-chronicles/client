import { createStore, combineReducers, applyMiddleware } from "redux";
import userReducer from "./reducers/userReducer";
import blockchainReducer from "./reducers/blockchainReducer";
import thunk from 'redux-thunk'

const reducers = combineReducers({
  user: userReducer,
  blockchain: blockchainReducer,
})

const store = createStore(
  reducers, applyMiddleware(thunk)
);

export default store;
