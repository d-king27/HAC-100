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
      profile:{
        name:'Gandalf the Grey',
        imgUrl:'https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436',
        deathDate:'12/06/17',
        funeralDate : '13/12/17',
        likes:['Going on long hikes','Helping his friends','magic']

      },
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
    <PersonInfo
        name={this.state.profile.name}
        imgUrl={this.state.profile.imgUrl}
        deathDate={this.state.profile.deathDate}
        likes={this.state.profile.likes}
        funeralDate = {this.state.profile.funeralDate}
    />
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
