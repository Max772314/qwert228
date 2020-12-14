import React from "react";

class ButtonTwo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <button onClick={this.props.callBack}>{this.props.title}</button>;
  }
}

export default ButtonTwo;
