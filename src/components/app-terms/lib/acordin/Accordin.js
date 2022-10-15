import React from "react";

export class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    const acc = this._acc.children;
    console.log(acc);
    for (let i = 0; i < acc.length; i++) {
      let a = acc[i];
      a.onclick = () => a.classList.toggle("active");
    }
  }

  render() {
    return (
      <>
        <div ref={(a) => (this._acc = a)} onClick={this._handleClick}>
          {this.props.children}
        </div>
      </>
    );
  }
}