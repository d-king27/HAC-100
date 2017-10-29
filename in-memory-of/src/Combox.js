import React from "react";
import 'uikit'

class Combox extends React.Component {
  constructor(props) {
    super(props);
    this.renderComments = this.renderComments.bind(this)
  }
renderComments(){
  return this.props.comments.map((item)=>{
    return (
      <div className='comment'>
        <p key={item}> {item}</p>
      </div>
    )
  })
}
  render() {
    return (
      <div id="combox uk-card uk-card-default">
        <h3>Please Leave a message</h3>
        {this.renderComments()}
      </div>
    );
  }
}

export default Combox;
