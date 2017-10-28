import React, {Component} from 'react';

class App extends Component {
    constructor (props) {
        super(props);
    }
    render () {
        const style = {outlineStyle: "solid"}
        return (
            <div style ={style} className="PersonInfo">

            <div>
               <h2>Gandalf the Grey</h2>
               <h3>Passed away on 12/06/17</h3>
            </div>

                <div style = {style} className="PersonImage">
                    <img src ="https://vignette.wikia.nocookie.net/lotr/images/8/8d/Gandalf-2.jpg/revision/latest?cb=20130209172436"/>
                </div>

                <div>
                    <h3>Gandalf liked...</h3>
                    <ul>
                        <li>Going on long hikes</li>
                        <li>Helping his friends</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default App;