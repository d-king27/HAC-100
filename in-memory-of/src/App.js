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
      input:{
        formName:'',
        DoB:'',
        rel:'',
        DoD:'',
        funeralDate:'',
        likes:'',
        charity:''

      },
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
  this.formHandleSubmit = this.formHandleSubmit.bind(this)
  
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
 }


 formHandleSubmit(e){
  e.preventDefault()
  this.changeTestBool()
}

 renderForm(){
   if(this.state.Bool === false){
     return (
      <div className='ProfileForm'>
        <form>
          <h1>Title</h1>
          <input type='checkbox' name='Auth-check' value="Facebook authentication keys?"/>
          <input type='text' name='lname'/>
          <input type='date' name='dob'/>
          <p>What relation was your loved one?</p>
          <select>
            <option value='husband'>Grandparent</option>
            <option value='parent'>Parent</option>
            <option value='friend'>Friend</option>
            <option value='partner'>Partner</option>
            <option value='child'>Child</option>
            <option value='sibling'>Sibling</option>
            <option value='uncle'>Uncle</option>
            <option value='auntie'>Auntie</option>
            <option value='nephew'>Nephew</option>
            <option value='niece'>Niece</option>
            <option value='cousin'>Cousin</option>
            <option value='pet'>Pet</option>
          </select>
          <input type="submit" value="Submit" onClick={this.formHandleSubmit} />
        </form>
      </div>
    )
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
