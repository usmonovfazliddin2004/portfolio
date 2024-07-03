import React from "react";

function Testimonals() {
  return (
    <div className="testimonals">
      <h1>Testimonials</h1>
      <p className="lorem1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <div>
        <div className="testimonals-block">
          <fieldset>
            <legend>
              <i class="fa-solid fa-quote-left"></i>
            </legend>
            <p className="lorem2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="testimonals-block-box">
              <img src="./src/icons/person1.svg" alt="" />
              <p>Client Name</p>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <i class="fa-solid fa-quote-left"></i>
            </legend>
            <p className="lorem2">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
            <div className="testimonals-block-box">
              <img src="./src/icons/person2.svg" alt="" />
              <p>Client Name</p>
            </div>
          </fieldset>
        </div>
      </div>
      <div>
        <div className="testimonals-block">
          <fieldset>
            <legend>
              <i class="fa-solid fa-quote-left"></i>
            </legend>
            <p className="lorem2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="testimonals-block-box">
              <img src="./src/icons/person3.svg" alt="" />
              <p>Client Name</p>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <i class="fa-solid fa-quote-left"></i>
            </legend>
            <p className="lorem2">
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.{" "}
            </p>
            <div className="testimonals-block-box">
              <img src="./src/icons/person4.svg" alt="" />
              <p>Client Name</p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Testimonals;
