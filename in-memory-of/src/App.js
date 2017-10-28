import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Combox from "./Combox";
import PersonInfo from "./PersonInfo";
import ProfileForm from './ProfileForm'
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      comments:['this is a comment'],
      value:'',
      profile:{
        name:'',
        imgUrl:'',
        deathDate:'',
        funeralDate : '',
        likes:[],
        charityUrl: ''

      },
      Bool:false
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
   var newProf = {
     name:'',
   imgUrl:'',
   deathDate:'',
   funeralDate : '',
   likes:'',
   charityUrl: ''}
console.log('called')
return axios.get('http://localhost:3001')
.then((response) =>{
  newProf.name = response.data.name
  newProf.imgUrl = response.data.imgUrl
  newProf.deathDate = response.data.deathDate
  newProf.funeralDate = response.data.funeralDate
  newProf.likes = response.data.likes
return axios.get('http://localhost:3001/roundtwo')
.then((respo)=>{
  newProf.charityUrl = respo.data.charityUrl
  this.setState({
    profile:newProf,
    Bool:true
  })

})
})




   this.setState({
     Bool:!this.state.Bool
   })
 }

 renderForm(){
   if(this.state.Bool === false){
     return <ProfileForm change = {this.changeTestBool}/>
   }
 }

 renderBody(){
   if(this.state.Bool === true)
    {return (<div>
    <PersonInfo
        name={this.state.profile.name}
        imgUrl={this.state.profile.imgUrl}
        deathDate={this.state.profile.deathDate}
        likes={this.state.profile.likes}
        funeralDate = {this.state.profile.funeralDate}
        charityUrl = {this.state.profile.charityUrl}
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
