import logo from "../../images/logo.png";
import s from "./Logo.module.css";
function Logo() {
  return <img className={s.logo} src={logo} alt={"logo"} />;
}

export default Logo;
