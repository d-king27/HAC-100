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
                            <img src={this.props.imgUrl} className='profileImg'/>
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h2>this tribute was set up with deepest symapthy by {this.props.name}'s {this.props.relation}</h2>
                        <h2>{this.props.name}</h2>
                        <h3>Born on {this.props.dob}</h3>
                        <h3>Funeral to be held on {this.props.funeralDate}</h3>
                    </div>
                </div>
                <div className="profileDetails">
                    <div className="eulogy">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <p>please give as much as you can do our charity of choice here:</p>
                    <a href={charityObj[this.props.charityUrl]}>click here to donate</a>
                    <p>If you feel you need some help with berevment</p>
                    <a href={this.createUrl()}>click here</a>
          
                    



                </div>
            </div>
        )
    }
}

export default App;