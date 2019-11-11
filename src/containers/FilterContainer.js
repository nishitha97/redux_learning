import React,{Component} from 'react'
import * as indexActions from '../actions/index'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {VisibilityFilters} from "../actions";

class FilterContainer extends Component {

    render() {
        return(
            <div>
                <span>Show: </span>
                <button onClick={(e)=>this.props.actions.setVisibilityFilter(VisibilityFilters.SHOW_ALL)}>All</button>
                <button onClick={(e)=>this.props.actions.setVisibilityFilter(VisibilityFilters.SHOW_ACTIVE)}>Active</button>
                <button onClick={(e)=>this.props.actions.setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED)}>Completed</button>
            </div>
        )
    }
}

//dispatch an action and update state in the store
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(indexActions, dispatch)
    }
};

export default connect(null,mapDispatchToProps)(FilterContainer);
