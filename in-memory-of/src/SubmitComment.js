import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class SubmitComment extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.props.addCommentToState(this.state.value)
        this.setState({
          value:''
        })
      }
    
      render() {
        return (
          <form onClick={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
}

export default SubmitComment;
