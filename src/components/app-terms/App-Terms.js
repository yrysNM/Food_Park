import "./App-Terms.scss";
import React from "react";
import { Accordion } from "./lib/acordin/Accordin";
import { termData } from "./lib/data/term-data";

// Import img
import Card from "../../resurce/img/card.png";

const AppTerms = () => {
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

                {termData.map((item) => (
                  <Accordion key={item.id}>
                    <div className="accor">
                      <div className="head">
                        <span>{item.title}</span>
                      </div>
                      <div className="body">
                        <p>{item.subtitle}</p>
                      </div>
                    </div>
                  </Accordion>
                ))}
              </div>
            </div>

            <div className="term__card">
              <img
                className="img"
                src={Card}
                alt=""
                width={"640px"}
                height={"600px"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppTerms;
