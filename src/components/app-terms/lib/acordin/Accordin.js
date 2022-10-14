import { Component, ReactDOM } from "react";

export class Accordin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: 0,
    };
  }

  componentDidMount() {
    window.setTimeout(() => {
      const el = ReactDOM.findDOMNode(this);
      const height = el.querySelector(".accordin__subtitle").scrollHeight;

      this.setState({
        height,
      });
    }, 333);
  }

  render() {
    const { title, subtitle, index, activeTab, activateTab } = this.props;

    const { height } = this.state;

    const isActive = activeTab === index;

    const innerStyle = {
      height: `${isActive ? height : 0}px`,
    };
    
    return (
      <div className="accordin" role={"tabpanel"} aria-expanded={isActive}>
        <div className="according__title" role={"tab"} onClick={activateTab}>
          <span>{title}</span>
        </div>

        <div
          className="accordin__subtitle"
          style={innerStyle}
          aria-hidden={!isActive}
        >
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }
}
