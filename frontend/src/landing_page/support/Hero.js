import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row p-5 text-center">
        <div className="col-6">
          <h4>Support Portal</h4>
        </div>
        <div className="col-6">
          <a href="">Track Tickets</a>
        </div>
      </div>
      <div className="row p-3 p-md-5 m-sm-3">
        <div className="col-md-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-md-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;