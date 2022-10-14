import "./App-Terms.scss";
import React, { Component } from "react";
import { termData } from "./lib/data/term-data";
import { Accordin } from "./lib/acordin/Accordin";

// Import img
import Card from "../../resurce/img/card.png";

class AppTerms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
    };

    this.activateTab = this.activateTab.bind(this);
  }

  activateTab(index) {
    this.setState((prev) => ({
      activeTab: prev.activeTab === index ? -1 : index,
    }));
  }

  render() {
    const { activeTab } = this.state;
    return (
      <>
        <div className="terms">
          <div className="container">
            <div className="terms__inner">
              <div className="term__content">
                <div className="term__content-title">
                  <span>Условия доставки</span>
                </div>

                <div className="term__content-accordin">
                  {/* According Function */}

                  {termData.map((item) => {
                    return (
                      <Accordin
                        key={item.id}
                        activeTab={activeTab}
                        index={item.id}
                        {...item}
                        activateTab={this.activateTab.bind(null, item.id)}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="term__card">
                <img
                  className="img"
                  src={Card}
                  alt=""
                  width={"640px"}
                  height={"793px"}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AppTerms;
