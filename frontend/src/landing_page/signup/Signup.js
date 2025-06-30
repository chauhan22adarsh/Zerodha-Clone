import React from "react";

import OpenAccount from "../OpenAccount";

function Signup() {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <img src="media/images/signup.png" className="img-fluid" />
          </div>
          <div className="col-md-6 p-5 mt-3">
            <h1>Signup Now</h1>
            <p
              style={{
                textDecoration: "none",
                color: "#6c757d",
                lineHeight: "2",
              }}
            >
              Or track your existing application
            </p>
            <div
              style={{
                width: "100%",
                height: "2rem",
                border: "1px solid #6c757d",
                borderRadius: "4px",
              }}
              className="d-flex"
            >
              <div
                className="text-center"
                style={{
                  width: "3rem",
                  borderRight: "1px solid #6c757d",
                  lineHeight: "30px",
                }}
              >
                <p>+91</p>
              </div>
              <div className="flex-fill" style={{ width: "100%" }}>
                <form style={{ width: "100%", border: "none", height: "100%" }}>
                  <input
                    placeholder="Mobile Number"
                    style={{
                      width: "100%",
                      border: "none",
                      height: "100%",
                      paddingLeft: "8px",
                    }}
                  />
                </form>
              </div>
            </div>
            <p
              style={{
                textDecoration: "none",
                color: "#6c757d",
                lineHeight: "2",
                fontSize: "12px",
                marginTop: "0.5rem",
              }}
            >
              You will recieve an OTP on your number
            </p>
            <button
              className="p-3 btn btn-primary fs-5 mb-3 mt-3"
              style={{
                minWidth: "fit-content",
                width: "45%",
              }}
            >
              Continue
            </button>
            <a
              href=""
              className="d-block mb-5"
              style={{ textDecoration: "none" }}
            >
              Want to open an NRI account?
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
