import React from "react";
function Header() {
  return (
    <div className="wrapper">
      <div className="navbar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Case Studios</a>
          </li>
          <li>
            <a href="#">Testimonials</a>
          </li>
          <li>
            <a href="#">Recent Work</a>
          </li>
          <li>
            <a href="#">Get In Touch</a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="#">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="main">
        <div>
          <h1>Your Name Here</h1>
          <p>
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <button>
            <a href="#">Let's got started</a>
            <a href="#">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </button>
        </div>
        <div>
          <img src="./src/images/person-logo.png" alt="" />
        </div>
      </div>
      <div className="section">
        <p>Worked with</p>
        <div className="buttons">
          <button>
            <a href="#">
              <img src="./src/icons/clickup logo 1.svg" alt="" />
            </a>
          </button>
          <button>
            <a href="#">
              <img src="./src/icons/dropbox_blue 1.svg" alt="" />
            </a>
          </button>
          <button>
            <a href="#">
              <img src="./src/icons/Elastic logo 1.svg" alt="" />
            </a>
          </button>
          <button>
            <a href="#">
              <img src="./src/icons/Group (2).svg" alt="" />
            </a>
          </button>
          <button>
            <a href="#">
              <img src="./src/icons/Group (3).svg" alt="" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
