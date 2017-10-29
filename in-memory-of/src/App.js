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
        firstName:'',
        lastName: '',
        DoB:'',
        DoF:'',
        likes:'',
        relation:'',
        fbUser: '',
        fbPass: '',
        charity: ''
      },
      comments:['this is a comment'],
      value:'',
      profile:{
        name:'',
        imgUrl:'',
        DoB:'',
        funeralDate : '',
        likes:[],
        charityUrl: ''

      },
      Bool:false
    }
  this.addCommentToState = this.addCommentToState.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.renderBody = this.renderBody.bind(this);
  this.renderForm = this.renderForm.bind(this);
  this.genProfile = this.genProfile.bind(this);
  this.formHandleSubmit = this.formHandleSubmit.bind(this);
  this.genHandleChange = this.genHandleChange.bind(this);
  }

addCommentToState(comment){
   var newState = this.state.comments.concat(comment)
  this.setState({
    comments:newState
  })
 }

 genProfile(){
   var newProf = {
    name: this.state.input.firstName + ' ' + this.state.input.lastName,
    imgUrl:'',
    DoB: this.state.input.DoB,
    funeralDate : this.state.input.DoF,
    likes:'',
    charityUrl: this.state.input.charity}
console.log('called')
return axios.get('http://localhost:3001')
.then((response) =>{
  
  newProf.imgUrl = response.data.imgUrl
  newProf.likes = response.data.likes
return axios.get('http://localhost:3001/roundtwo')
.then((respo)=>{
  this.setState({
    profile:newProf,
    Bool:true
  })

})
})
 }


 formHandleSubmit(e){
  e.preventDefault()
  this.genProfile()
}

 renderForm(){
   if(this.state.Bool === false){
     return (
      <div className='ProfileForm'>
        <form>
          <h3>Create a tribute</h3>
          <p>Please fill in this form to generate a tribute</p>
          <input type='text' name='lname' onChange={this.genHandleChange('firstName')}/>
          <input type='text' name='fname' onChange={this.genHandleChange('lastName')}/>
          <input type='date' name='dob' onChange={this.genHandleChange('DoB')}/>
          <input type='date' name='dof' onChange={this.genHandleChange('DoF')}/>



          <p>What relation was your loved one?</p>
          <select onChange={this.genHandleChange('relation')}>
            <option value=''>select relation</option>
            <option value='grandparent'>Grandparent</option>
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



          <p>Please enter your location</p>
          <input type='text' name='location' placeholder='Please enter your location'/>



          <p>Select your interests</p>
          <select className ="likeList">
            <option value = ''>select interests</option>
            <option value = 'nature'>nature</option>
            <option value = 'music'>music</option>
            <option value = 'films'>films</option>
            <option value = 'food'>food</option>
            <option value = 'traveling'>traveling</option>
            <option value = 'sports'>sports</option>
          </select>



          <p>Username</p>
          <input type='text' name="username" onChange={this.genHandleChange('fbUser')}/>
          <p>Password</p>


          <input type='password' name="password" onChange={this.genHandleChange('fbPass')}/>
          <input type="submit" value="Submit" onClick={this.formHandleSubmit} />
          <p>Add charities</p>


          <select onChange={this.genHandleChange('charity')}>
            <option>select</option>
            <option>Macmillan</option>
            <option>Oxfam</option>
            <option>Cancer Research</option>
          </select>
          
        </form>
      </div>
    )
   }
 }


  genHandleChange(input){
    return (event) => {
      event.preventDefault();
      let newInput = Object.assign({}, this.state.input, {
        [input]: event.target.value
      })
      this.setState({
       input: newInput
      })
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
