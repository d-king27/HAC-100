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
        charity: '',
        locale:'',
        postcode:'',
        eulogy:''
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
      Bool:false,
      style:'inline'
    }
  this.addCommentToState = this.addCommentToState.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.renderBody = this.renderBody.bind(this);
  this.renderForm = this.renderForm.bind(this);
  this.genProfile = this.genProfile.bind(this);
  this.formHandleSubmit = this.formHandleSubmit.bind(this);
  this.genHandleChange = this.genHandleChange.bind(this);
  this.renderPlaces = this.renderPlaces.bind(this)
  this.changeStyle = this.changeStyle.bind(this);
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
    likes:this.state.input.likes,
    charityUrl: this.state.input.charity,
    postcode: this.state.input.postcode,
    locale: this.state.input.locale,
    relation:this.state.input.relation,
    eulogy:this.state.input.eulogy
  }

  this.setState({
    profile:newProf,
    Bool:true
  })

 }


 formHandleSubmit(e){
  e.preventDefault()
  this.genProfile()
}

renderPlaces(){
  return str.split('\n').map((item)=>{
    return (<option value={item}>{item}</option>)
  })
}

 renderForm(){
   if(this.state.Bool === false){
     return (
      <div className='ProfileForm'>
        <form>
          <h3>Create a tribute</h3>
          <p>Please fill in this form to generate a tribute</p>
          <p>First name</p>
          <input type='text' name='lname' onChange={this.genHandleChange('firstName')}/>
          <p>Last name</p>
          <input type='text' name='fname' onChange={this.genHandleChange('lastName')}/>
          <p>Date of birth</p>
          <input type='date' name='dob' onChange={this.genHandleChange('DoB')}/>
          <p>Funeral date (optional)</p>
          <input type='date' name='dof' onChange={this.genHandleChange('DoF')}/>
          <p>message about this person</p>
          <textarea type='text-area' name='dof' onChange={this.genHandleChange('eulogy')}/>

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
          <p>Where are you based?</p>
          <select onChange={this.genHandleChange('locale')}>
            {this.renderPlaces()}
          </select>
          <p>Add charities (optional)</p>
          <select onChange={this.genHandleChange('charity')}>
            <option>select</option>
            <option>Macmillan</option>
            <option>Oxfam</option>
            <option>Cancer Research UK</option>
          </select>
          <input type="submit" value="Submit" onClick={this.formHandleSubmit} />
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
        dob={this.state.profile.DoB}
        likes={this.state.profile.likes}
        funeralDate = {this.state.profile.funeralDate}
        charityUrl = {this.state.profile.charityUrl}
        bool = {this.state.bool}
        locale = {this.state.input.locale}
        relation = {this.state.input.relation}
        eulogy = {this.props.eulogy}
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
changeStyle(event) {
  if(this.state.style === 'none') {
    this.setState({
      style: 'inline'
    })
  }
  else {
this.setState({
    style: 'none'
  })
  }
}

  render() {
    const style = {display: this.state.style }
    return (
      <div className="App">  
        <img src = '' id = 'profileImage' style = {style}/>
         {this.renderForm()}
        {this.renderBody()}
        <button onClick={this.changeStyle}>click me </button>
      </div>
    );
  }
}

export default App;


var str = `
Buckinghamshire Area
Isle of Wight Area
North Hampshire Area 
Oxfordshire and West Berkshire Area
South Hampshire Area 
South West Surrey Area 
Surrey East Area 
Surrey North Area 
Thames Valley Berkshire Area 
West Sussex Area
Bexley and Bromley Area
Croydon Branch
East Kent with Swale Area
East Sussex Area
Greenwich Area
Kensington and Chelsea and Hammersmith and Fulham Area
Lambeth Branch
Maidstone and Medway Area 
Richmond upon Thames Area
South Kent Area
West Kent Branch
Bath and District Area
Bristol and District Area
Cornwall Area
Devon Area
Dorset Area
New Forest Area
Somerset Area
Eastern England
Bedfordshire Area
Cambridge with Fenland and Uttlesford Area
Essex Area
Hertfordshire Area
Huntingdonshire Branch
Norwich and Central Norfolk Area
Peterborough Branch
Suffolk Area
East Midlands
Boston and District Branch
Derbyshire and East Staffordshire Area
Leicestershire Area
Lincoln Branch
Northamptonshire Area 
Nottinghamshire Area
Stamford and Bourne Branch
Birmingham Area
Coventry and Warwickshire Area
Gloucestershire Area
Herefordshire Area
Sandwell and Walsall Area
Shropshire, Telford and Wrekin Area
South Staffordshire Area
Wolverhampton and Dudley Area
Worcestershire Branch
Wales
Cardiff and the Vale Area
Gwent Area
Merthyr Tydfil, Rhondda Cynon Taff Area
Morgannwg Branch
North Wales Area
Powys Area
West Wales Area
Craven and Bradford District Area
Doncaster and Rotherham Area
Hull and East Riding Area
Kirklees Area
Leeds Area
Pontefract and Wakefield Branch
Sheffield Branch
South Humber Area
York and North Yorkshire Area
Cumbria Area
Lancashire Area
Manchester Area
Wirral Area
Tees Valley and Durham Area
Tyneside Area
Armagh and Dungannon Branch
Belfast Area
Foyle Area
Newry and Mourne Branch
North Down and Ards Area
Northern Area
Northern Ireland Main
Omagh and Fermanagh Branch`