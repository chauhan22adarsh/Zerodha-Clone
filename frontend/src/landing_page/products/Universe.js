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

        <div className="col-md-4 p-5 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            className="img-fluid"
            style={{ width: "65%" }}
          />
          <p className="text-small text-muted mt-3">
            Our asset management venture
          </p>
          <p className="text-small text-muted">
            that is creating simple and transparent index
          </p>
          <p className="text-small text-muted">
            funds to help you save for your goals.
          </p>
        </div>
        <div className="col-md-4 p-5 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            className="img-fluid"
            style={{ width: "65%" }}
          />
          <p className="text-small text-muted mt-3">
            Options trading platform that lets you
          </p>
          <p className="text-small text-muted">
            create strategies, analyze positions, and examine
          </p>
          <p className="text-small text-muted">
            data oints like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-md-4 p-5 mt-5">
          <img
            src="media/images/tijori.svg"
            className="img-fluid"
            style={{ width: "65%" }}
          />
          <p className="text-small text-muted mt-3">
            Investment research platform
          </p>
          <p className="text-small text-muted">
            that offers detailed insights on stocks,
          </p>
          <p className="text-small text-muted">
            sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-md-4 p-5 mt-5">
          <img
            src="media/images/streakLogo.png"
            className="img-fluid"
            style={{ width: "65%" }}
          />
          <p className="text-small text-muted mt-3">
            Systematic trading platform
          </p>
          <p className="text-small text-muted">
            that allows you to create and backtest
          </p>
          <p className="text-small text-muted">strategies without coding.</p>
        </div>
        <div className="col-md-4 p-5 mt-5">
          <img
            src="media/images/smallcaseLogo.png"
            className="img-fluid"
            style={{ width: "65%" }}
          />
          <p className="text-small text-muted mt-3">
            Thematic investment platform
          </p>
          <p className="text-small text-muted">
            that helps you invest in diversified
          </p>
          <p className="text-small text-muted">basket of stocks on ETFs.</p>
        </div>
        <div className="col-md-4 p-5 mt-5">
          <img
            src="media/images/dittoLogo.png"
            className="img-fluid"
            style={{ width: "65%" }}
          />
          <p className="text-small text-muted mt-3">
            Personalized advice on life
          </p>
          <p className="text-small text-muted">and health insurance. No spam</p>
          <p className="text-small text-muted">and no mis-selling.</p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ margin: "0 auto", minWidth: "fit-content", width: "20%" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
