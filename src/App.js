import React, { Component } from 'react';
import {connect} from 'react-redux';
import {changeFirstName} from './actions/changeAction';

class App extends Component {
  constructor(props) {
      super(props);
    }
    render() {
        return (
            <div>
               {this.props.fname} <br />
<input type="text" ref={(myInputControl) => 
    this.fnameInput = myInputControl} />
<button onClick={(e)=> 
    this.props.changeFName(this.fnameInput.value)}>
    Change the First Name</button><br/>

               <button onClick={this.props.onAgeDown}>-</button>
                {this.props.age}
                <button onClick={this.props.onAgeUp}>+</button>
                

                
            </div>
        );
    }
 }

// Get state from the store.
const mapStateToProps = (state) => {
  return {
    age:state.age,
    fname:state.fname
  }
}

// Use reducer to change the state.
const mapDispatchToProps = (dispatch) => {
  return {
    onAgeUp:()   => dispatch({type:'AGE_UP'}),
    onAgeDown:() => dispatch({type:'AGE_DOWN'}),
    changeFName: (fname) => dispatch(changeFirstName(fname))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
