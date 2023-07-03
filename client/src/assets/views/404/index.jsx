import s from "./404.module.css";
import { TbMoodSadDizzy } from "react-icons/tb";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className={s.container}>
      <div className={s.title}>
        <TbMoodSadDizzy /> Page not found <TbMoodSadDizzy />
      </div>
      <Link to="/home" className="backToHomeLink">
        <IoMdArrowRoundBack />
        {"Back to Home"}
      </Link>
      <div className={s.imgContainer}>
        <img
          src="https://img.freepik.com/foto-gratis/retrato-mascota-adorable-aislado_23-2149192301.jpg?size=626&ext=jpg&uid=R79611226&semt=sph"
          alt="image404"
        />
      </div>
    </div>
  );
}
