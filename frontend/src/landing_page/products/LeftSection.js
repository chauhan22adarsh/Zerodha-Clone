import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img src={imageURL} className="img-fluid" />
        </div>
        <div className="col-md-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }}>
              Learn More
            </a>
          </div>
          <div className=" row mt-3">
            <div className="col-4">
              <a href={googlePlay}>
                <img src="media/images/googlePlayBadge.svg" />
              </a>
            </div>
            <div className="col-2"></div>
            <div className="col-4">
              <a href={appStore}>
                <img src="media/images/appstoreBadge.svg" />
              </a>
            </div>
            <div className="col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;