import React from "react";
import Instagram from "../../assets/instagram.svg";
import LinkedIn from "../../assets/linkedin.svg";
import Twitter from "../../assets/twitter.svg";
import Facebook from "../../assets/facebook.svg";
import Contact from "../../assets/contact.svg";

const Footer = () => {
  return (
    <div className="py-8 xl:px-36 px-4 bg-black text-neutral-50 flex flex-row justify-between">
      <div>
        <div className="text-center mb-2">Follow us</div>
        <div className="flex flex-row">
          <div className="xl:mx-2 mx-0">
            <a href="https://twitter.com/">
              <img className="xl:w-[75%] w-[50%]" src={Twitter} alt="twitter" />
            </a>
          </div>
          <div className="xl:mx-2 mx-0">
            <a href="https://www.linkedin.com/">
              <img className="xl:w-[75%] w-[50%]" src={LinkedIn} alt="linkedin" />
            </a>
          </div>
          <div className="xl:mx-2 mx-0">
            <a href="https://www.facebook.com/">
              <img className="xl:w-[75%] w-[50%]" src={Facebook} alt="facebook" />
            </a>
          </div>
          <div className="xl:mx-2 mx-0">
            <a href="https://www.instagram.com/">
              <img className="xl:w-[75%] w-[50%]" src={Instagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center mb-2">Contact us</div>
        <div className="flex flex-row">
          <img src={Contact} alt="Contact" />
          <div className="mx-2">9390137160</div>
        </div>
        <div>
          <a href="mailto:iprform@gmail.com">
            Email Id :  iprform@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
