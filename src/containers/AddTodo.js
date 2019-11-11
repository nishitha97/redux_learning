import React, {Component} from "react";
import {bindActionCreators} from "redux";
import * as indexActions from '../actions/index'
import {connect} from "react-redux";

class AddTodo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            enteredText: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.enteredText === '' || this.state.enteredText === null) {
             console.log("hello")
        } else {
            this.props.actions.addTodo(this.state.enteredText);
            console.log("hello11111111111111111111")

        }

    };

    handleChange = (e) => {
        this.setState({
            enteredText: e.target.value
        })
    };

    render() {
        return (
            <div>
              <span>
                  <form onSubmit={(e) => this.handleSubmit(e)}>
                  <input type="text" name="todo" onChange={(e) => this.handleChange(e)}/><input type="submit"
                                                                                                value="Add"/>
                      {this.props.text === 'abc' && <p>hwllo</p>}
                  </form>
                  </span>
            </div>
        );
    }

}

//get state from store and set as a  prop
const mapStateToProps = (state) => {
    console.log("ddddddddddddddddddddddddddddddddddddddddddd");
    console.log(state);
    console.log(state.todos.text);
    return {
       text:state.todos.text
    }
};
//dispatch an action and update state in the store
//set an action as a prop so that it can be dispatched an update the state in the store
const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(indexActions, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);