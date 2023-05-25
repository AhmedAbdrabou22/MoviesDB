import {createStore} from "redux"
import getAllMovies from "../Reducers/ReduceMovies"
import {composeWithDevTools} from "redux-devtools-extension"
import { applyMiddleware } from "redux";
import thunk from "redux-thunk"

const store = createStore(getAllMovies , applyMiddleware(thunk));


export default store