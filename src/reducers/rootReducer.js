import {combineReducers} from "redux";
import todos from '../reducers/todos'
import visibilityFilter from '../reducers/VisibilityFilterReducer'

export default combineReducers({
    todos,
    visibilityFilter
})