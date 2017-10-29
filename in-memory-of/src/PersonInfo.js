import React, { Component } from 'react';
import 'uikit';
import axios from 'axios';

var charityObj = {
    oxfam:'http://www.oxfam.org.uk/donate',
    'Cancer Research UK':'https://www.cancerresearchuk.org/support-us/donate',
    Macmillan:'https://www.macmillan.org.uk/donate'

}

class App extends Component {
    constructor(props) {
        super(props);
        this.renderLikes = this.renderLikes.bind(this)
        this.createUrl = this.createUrl.bind(this)
    }

    renderLikes() {
        return this.props.likes.map((like) => {
            return (<li>{like}</li>)
        })
    }

    createUrl(){
        var n = this.props.locale.split(' ').join('-')
        var res = encodeURI(`https://www.cruse.org.uk/${n}-map`);
       return res
    }

    render() {
        return (
            <div className="PersonInfo">
                <div className="profileHead">
                        <div>
                            <img src={this.props.imgUrl} className='topImage'/>
                        </div>
                    <div className="profileInfo ">
                        <h2 id='profileName'></h2>
                        <h2 id="profileName">{this.props.name}</h2>
                        <h3>Born on {this.props.dob}</h3>
                        <h3>Funeral to be held on {this.props.funeralDate}</h3>
                    </div>
                    <div className='navBar'>
                        <div className='navBtn'>
                            <a href={charityObj[this.props.charityUrl]}><p>Our chosen charity</p></a>
                        </div>
                        <div className='navBtn'>
                            <a href={this.createUrl()}><p>Counseling near you</p></a>
                        </div>
                    </div>
                </div>
                <div className="profileDetails columns">
                    <div className="eulogy uk-card">
                        <p>{this.props.eulogy}</p>
                    </div>
                </div>
                <img src = "" id= "profileImage"/>
            </div>
        )
    }
}

export default App;