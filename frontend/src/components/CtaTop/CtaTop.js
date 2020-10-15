import React from "react";
import { withRouter } from "react-router-dom";

const CtaTop = (props) => {
  const navProduct = () => {
    props.history.push("/product");
  };

  return (
    <div className="cta-top">
      <div className="cta-top__img" />
      <div className="cta-top__textbox">
        <div className="cta-top__textbox--headline">Automate Your future</div>
        <div className="cta-top__textbox--story">
          if you know , 25% of business wners wotk over 60 hourse per week?Lear
          to work smart, by laveraging tehnology
        </div>
        <div className="cta-top__textbox--story">
          in this two week, you will focus on the bigger picture while you
          implement the most powerful automated sales system ever created.
        </div>
        <input
          className="cta-top__textbox--button"
          type="submit"
          value="Learn the Alchemy of automation"
          onClick={() => navProduct()}
        />
      </div>
    </div>
  );
};
export default withRouter(CtaTop);
