import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer/rootReduxer";

const store = createStore(rootReducer);
export default store;
