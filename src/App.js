import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
      super(props);
    }
    render() {
        return (
            <div>
                {this.props.age}
                <button onClick={this.props.onAgeUp}>+</button>
                <button onClick={this.props.onAgeDown}>-</button>
            </div>
        );
    }
 }

// Get state from the store.
const mapStateToProps = (state) => {
  return {
    age:state.age
  }
}

// Use reducer to change the state.
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp:()   => dispatch({type:'AGE_UP'}),
    onAgeDown:() => dispatch({type:'AGE_DOWN'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
