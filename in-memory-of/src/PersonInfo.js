import React, { Component } from 'react';
import 'uikit'
import axios from 'axios'

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
                    <div className="PersonImage">

                        <div>
                            <img src={this.props.imgUrl} />
                        </div>

                    </div>
                    <div className="profileInfo ">
                        <h2 id='profileName'></h2>
                        <h2 id="profileName">{this.props.name}</h2>
                        <h3>Born on {this.props.dob}</h3>
                        <h3>Funeral to be held on {this.props.funeralDate}</h3>
                    </div>
                </div>
                <div className="profileDetails columns">
                    <div className="eulogy uk-card">
                        <p>{this.props.eulogy}</p>
                    </div>
                    <div className='column'>
                        <p>please give as much as you can do our charity of choice here:</p>
                        <a href={charityObj[this.props.charityUrl]}>click here to donate</a>
                        <p>If you feel you need some help with berevment</p>
                        <a href={this.createUrl()}>click here</a>
                    </div>
                </div>
                <img src = "" id= "profileImage"/>
            </div>
        )
    }
}

export default App;