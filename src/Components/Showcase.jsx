import React from "react";
function Showcase() {
    return (
      <>
        <section id="showcase">
          <div className="container">
            <h4>FEATURE</h4>
            <h2>The benefit of using our platform</h2>

            <div className="d-flex align-items-center justify-content-between py-5">
              <div className="icon">
                <img src="ikon1.png" alt="" />
                <h3>Professional & Fast</h3>
                <p>
                  Search and hire the most talented freelancers to match your
                  needs. No matter what you need done, we've got the perfect
                  freelancer for you.
                </p>
              </div>

              <div className="icon">
                <img src="ikon2.png" alt="" />
                <h3>24/7 support</h3>
                <p>
                  You have any concerns or questions? Don’t worry, we have our
                  support team to help you at anytime and anywhere.
                </p>
              </div>

              <div className="icon">
                <img src="ikon3.png" alt="" />
                <h3>Safe & Secure</h3>
                <p>
                  We know that safety is the most important thing for our
                  customer, so all of our payments are processed instantly and
                  securely.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Showcase;