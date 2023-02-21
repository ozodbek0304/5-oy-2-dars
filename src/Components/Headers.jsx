import React from "react";

function Headers() {
    return (
      <>
        <header id="main-header" className="text-bg-wihte py-4">
          <nav className="container d-flex align-items-center justify-content-between">
            <img src="/Logo.png" alt="" />
            <ul className="d-flex align-items-center gap-5 list-unstyled m-0">
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="text-reset text-decoration-none">
                  For Freelancer
                </a>
              </li>
              <button className="btn w-15 h-25  ">Get Started</button>
            </ul>
          </nav>
          <div className="d-flex  align-items-center justify-content-evenly container py-5 ">
            <div className="w-50">
              <h1 className="w-100 py-4 ">
                Recruit top talented freelancer for your business
              </h1>
              <p className="w-75 py-3">
                Connect you to thoudsands of talented freelancer from any
                industry. You can have the best people in just few simple steps.
              </p>
              <button className="btn w-15 h-25  ">Get Started</button>
            </div>
            <div>
              <img src="/Vector.png"  className="vector py-5" alt="" />
              <img src="/odam.png" alt=""  className="odam"/>
            </div>
          </div>
        </header>
        <div className="container my-5 px-5 ">
          <img src="/Logos.png" alt="" />
        </div>
      </>
    );
}
export default Headers;