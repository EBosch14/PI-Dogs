import s from "./socialWebs.module.css";
import { ImLinkedin2 } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

export default function SocialWebs() {
  return (
    <footer className={s.footer}>
      <div className={s.linkedIn}>
        <a href="https://www.linkedin.com/in/enzo-bosch/" target="_blank">
          <ImLinkedin2 />
        </a>
      </div>
      <div className={s.instagram}>
        <a href="https://www.instagram.com/enzojbosch_/" target="_blank">
          <BsInstagram />
        </a>
      </div>
    </footer>
  );
}
