import React from "react";

function Explore() {
    return (
      <section id="explore">
        <div className="container d-flex  align-items-center justify-content-evenly">
          <div>
            <h3>Explore and hire talent from our platform</h3>
            <p className="py-3">
              We've got experts for every industry - all under one roof! You can
              find everything from WordPress developers to Graphic designers to
              copywriters and many more at Wakanda.
            </p>
            <button className="btn w-15 h-25  ">Explore now</button>
                </div>
                <img src="/rasm.png" alt="" className="rasm" />
                <img src="/orqa.png" alt="" className="orqa" />
                <img src="/odam1.png" alt="" className="odam1" />
                <img src="rasm1.png" alt="" className="rasm1"/>
        </div>
      </section>
    );
}

export default Explore;