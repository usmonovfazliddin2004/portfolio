import React from "react";

function Footer() {
  return (
    <div className="footer">
      <h1>Get In Touch</h1>
      <p className="lorem3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </p>
      <p className="email">Email</p>
      <input type="email" placeholder="Please enter your email..." className="input-email"/>
      <p className="email">Mobil</p>
      <input type="tel" placeholder="Enter mobile..." className="input-number"/>
      <p className="email">Mobil</p>
      <textarea name="" id="textarea-message" placeholder="Enter your message..."></textarea>
      <button className="submit"><a href="#">Submit</a><a href="#"><i class="fa-solid fa-angle-right"></i></a></button>
    </div>
  );
}

export default Footer;
