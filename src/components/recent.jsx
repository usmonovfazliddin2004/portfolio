import React from "react";

function Recent() {
  return (
    <div className="recent">
      <div className="recent-view">
        <h1>Recent Work</h1>
        <p className="solving1">
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="recent-view-block">
          <div>
            <img src="./src/images/recent1.png" alt="" />
            <h1>Work name here</h1>
            <p>
              Labore et dolore magna aliqua. sed do eiusmod tempor incididunt ut
              labore et dolore magna.
            </p>
            <button>
              <a href="#">Know more</a>
              <a href="#">
                <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
          </div>
          <div>
            <img src="./src/images/recent2.png" alt="" />
            <h1>Work name here</h1>
            <p>
              Rempor incididunt ut labore et dolore magna aliqua. sed do eiusmod
              tempor incididunt u
            </p>
            <button>
              <a href="#">Know more</a>
              <a href="#">
                <i class="fa-solid fa-angle-right"></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recent;
