import React from "react";

class Combox extends React.Component {
  constructor(props) {
    super(props);
    this.renderComments = this.renderComments.bind(this)
  }
renderComments(){
  const style = { outlineStyle: "solid" };
  return this.props.comments.map((item)=>{
    return <p style={style}> {item}</p>
  })
}
  render() {
    const style = { outlineStyle: "solid" };
    return (
      <div id="combox">
        <h1>Please Leave a message</h1>
        {this.renderComments()}
      </div>
    );
  }
}

export default Combox;
