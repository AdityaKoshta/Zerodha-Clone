import React from "react";

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img
            src="public/assets/zerodhaFundhouse.png"
            style={{ width: "200px" }}
          />
          <p className="text-small text-muted mt-3">
            Thematic investment platform <br />
            that is creating simple and transparent index <br />
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="public/assets/sensibullLogo.svg"
            style={{ width: "230px" }}
          />
          <p className="text-small text-muted mt-4">
            Options trading platform that lets you <br />
            create strategies, analyze positions, and examine <br />
            data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="public/assets/smallcaseLogo.png"
            style={{ width: "200px" }}
          />
          <p className="text-small text-muted mt-3 ">
            Investment research platform <br />
            that offers detailed insights on stocks, <br />
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="public/assets/streakLogo.png" style={{ width: "200px" }} />
          <p className="text-small text-muted mt-3 ">
            Systematic trading platform <br />
            that allows you to create and backtest <br />
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="public/assets/smallcaseLogo.png"
            style={{ width: "220px" }}
          />
          <p className="text-small text-muted mt-4">
            Thematic investing platform <br />
            that helps you invest in diversified <br />
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="public/assets/dittoLogo.png" style={{ width: "190px" }} />
          <p className="text-small text-muted mt-3">
            Personalized advice on life <br />
            and health insurance. No spam <br />
            and no mis-selling.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
