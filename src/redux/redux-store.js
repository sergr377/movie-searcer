import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import newestReducers from "./newestReducers";
import topRatedReducers from "./topRatedReducers";
import { filmPageReducers } from "./filmPageReducers";
import { searchReducers } from "./searchBarReducers";
import popularReducers from "./popularReducers";
import favoriteReducers from "./favoriteReducers";

//бывший _state
let reducers = combineReducers({
    newest: newestReducers,
    top: topRatedReducers,
    film: filmPageReducers,
    search: searchReducers,
    popular: popularReducers,
    favorite: favoriteReducers
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;
