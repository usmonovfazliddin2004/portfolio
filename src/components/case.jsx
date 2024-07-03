import React from "react";

function Case() {
  return (
    <div className="case">
      <div className="case-box">
        <h1 className="studies">Case Studies</h1>
        <p className="solving">
          Solving user & business problems since last 15+ years.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <div className="case-block">
          <div>
            <div className="Fintech">
              <p>Fintech</p>
            </div>
            <h1 className="work">Work name here</h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="view">
              <a href="#">View case study</a>
              <a href="#">
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </button>
          </div>
          <div>
            <img src="./src/images/Mask group.png" alt="" />
          </div>
        </div>

        <div className="case-block1">
          <div>
            <img src="./src/images/Mask group (1).png" alt="" />
          </div>
          <div>
            <div className="EdTech">
              <p>EdTech</p>
            </div>
            <h1 className="work">Work name here</h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="view1">
              <a href="#">View case study</a>
              <a href="#">
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </button>
          </div>
        </div>

        <div className="case-block2">
          <div>
            <div className="Pharma">
              <p>Pharma</p>
            </div>
            <h1 className="work">Work name here</h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <button className="view2">
              <a href="#">View case study</a>
              <a href="#">
                <i class="fa-solid fa-chevron-right"></i>
              </a>
            </button>
          </div>
          <div>
            <img
              src="./src/images/image 3.png"
              alt=""
              style={{ borderRadius: "4px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Case;
