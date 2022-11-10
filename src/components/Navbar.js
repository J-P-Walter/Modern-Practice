import "./Navbar.css";
import { BiAperture } from "react-icons/bi";
import { FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav>
      <div className="modern__nav logo">
        <a href="/">
          <BiAperture />
        </a>
      </div>
      <div className="modern__nav link">
        <a href="/">ABOUT</a>
        <a href="/">CAREERS</a>
      </div>
      <div className="modern__nav social">
        <a href="/">
          <FaTwitter />
        </a>
        <a href="/">
          <FaLinkedin />
        </a>
        <a href="/">
          <FaYoutube />
        </a>
      </div>
      <div className="modern__nav contact">
        <a href="/">CONTACT US</a>
      </div>
    </nav>
  );
}
