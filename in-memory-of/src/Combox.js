import React from "react";

class Combox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = { outlineStyle: "solid" };
    return (
      <div id="combox">
        <h1>Please Leave a message</h1>
        <p style={style}>First example.</p>
      </div>
    );
  }
}

export default Combox;
