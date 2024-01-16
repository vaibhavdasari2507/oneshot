import "./header.css";
import BgImage from "./bg_image.png"

export default function Header() {
  return (
    <div className="header">
      <img
        className="headerImg"
        src={BgImage}
      />
    </div>
  );
}