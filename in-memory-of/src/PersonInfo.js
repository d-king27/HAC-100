import React, { Component } from 'react';
import 'uikit'

class App extends Component {
    constructor(props) {
        super(props);
        this.renderLikes = this.renderLikes.bind(this)
    }
    renderLikes() {
        return this.props.likes.map((like) => {
            return (<li>{like}</li>)
        })
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
                    <a href={this.props.charityUrl}>click here to donate</a>
                </div>
                <div className='interests'>
                    <h3>Gandalf liked...</h3>
                    <ul>
                        {this.renderLikes()}
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;