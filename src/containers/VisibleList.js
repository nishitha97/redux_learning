import React,{Component} from "react"
import {bindActionCreators} from "redux";
import * as indexActions from '../actions/index'
import {connect} from "react-redux";
import {VisibilityFilters} from "../actions";

class VisibleList extends Component{

    render() {
        const getVisibleTodos = (todos, filter) => {
            switch (filter) {
                case VisibilityFilters.SHOW_ALL:
                    return todos
                case VisibilityFilters.SHOW_COMPLETED:
                    return todos.filter(t => t.completed)
                case VisibilityFilters.SHOW_ACTIVE:
                    return todos.filter(t => !t.completed)
                default:
                    throw new Error('Unknown filter: ' + filter)
            }
        }
        return(
            <div>
                {getVisibleTodos(this.props.todos,this.props.visibilityFilter).map(todo=>{
                    if(todo.completed === false)
                    return<p key={todo.id} onClick={(e)=>this.props.actions.toggleTodo(todo.id)}>{todo.text}</p>;
                    else{
                        return<p style={{textDecoration: "line-through"}} key={todo.id}>{todo.text}</p>;
                    }

                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state.todos);
    return {
       todos:state.todos,
        visibilityFilter:state.visibilityFilter
    }
};
//dispatch an action and update state in the store
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(indexActions, dispatch)
    }
};
 export default connect(mapStateToProps,mapDispatchToProps)(VisibleList);