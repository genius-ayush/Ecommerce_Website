import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

function navbar() {
  return (
    <div>
      <div className="flex">
      <div>
        <img className="max-w-[250px] ml-20" src="logo.jpeg " alt="" />
      </div>
      <div className="ml-96">
        <div className="flex gap-7 mt-8 p-3">
          <div>About Us</div>
          <div>Contact Us</div>
          <div>7999784071</div>
          </div>
        <div>

          <div className="flex gap-7 p-3 ">
            <div>HOME</div>
            <div>BLOG</div>
            <div>SHOP</div>
            <div>CART</div>
            <div>LOGIN</div>
            <div>REGISTER</div>
          </div>

          <div className="flex gap-7 p-3">
            <div><BiLogoFacebook /></div>
            <div><FaTwitter /></div>
            <div><FaYoutube /></div>
            <div><FaInstagram/></div>
            <div><TiSocialLinkedin /></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default navbar;
