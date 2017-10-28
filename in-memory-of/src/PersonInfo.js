import React, {Component} from 'react';

class App extends Component {
    constructor (props) {
        super(props);
        this.renderLikes = this.renderLikes.bind(this)
    }
    renderLikes(){
        return this.props.likes.map((like)=>{
            return ( <li>{like}</li>)
        })
    }
    render () {
        const style = {outlineStyle: "solid"}
        return (
            <div style ={style} className="PersonInfo">

            <div>
               <h2>{this.props.name}</h2>
               <h3>Born on {this.props.deathDate}</h3>
               <h3>Funeral to be held on {this.props.funeralDate}</h3>
            </div>

                <div style = {style} className="PersonImage">
                    <img src ={this.props.imgUrl}/>
                </div>

                <div style = {style} className="PersonImage">
                   <p>please give as much as you can do our charity of choice here:</p>
                   <a href={this.props.charityUrl}>click here to donate</a>
                </div>
                

                <div>
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