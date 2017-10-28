import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Combox from "./Combox";
import PersonInfo from "./PersonInfo";
import ProfileForm from './ProfileForm'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments:['test'],
      value:'',
      testBool:false
    }
  this.addCommentToState = this.addCommentToState.bind(this)
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.renderBody = this.renderBody.bind(this)
  this.renderForm = this.renderForm.bind(this)
  this.changeTestBool = this.changeTestBool.bind(this)
  }

addCommentToState(comment){
   var newState = this.state.comments.concat(comment)
  this.setState({
    comments:newState
  })
 }

 changeTestBool(){
   this.setState({
     testBool:!this.state.testBool
   })
 }

 renderForm(){
   if(this.state.testBool === false){
     return <ProfileForm change = {this.changeTestBool}/>
   }
 }

 renderBody(){
   if(this.state.testBool === true)
    {return (<div>
    <PersonInfo/>
      <Combox comments = {this.state.comments} />
      <form >
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" onClick={this.handleSubmit} />
        </form>
        </div>)}
 }

handleChange(event) {
  this.setState({value: event.target.value});
}

handleSubmit(event) {
  event.preventDefault();
this.addCommentToState(this.state.value)
this.setState({
    value:''
  })

}

  render() {
    return (
      <div className="App">  
         {this.renderForm()}
        {this.renderBody()}
      </div>
    );
  }
}

export default App;
