import s from "./card.module.css";
import { useNavigate } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";

export default function Card({name, image, id}) {
  

  const imageNotFound =
    "https://img.freepik.com/vector-gratis/ilustracion-icono-camara_53876-5563.jpg?w=826&t=st=1688400604~exp=1688401204~hmac=09a96cac28785eaec30caec022ca0485d2b03d25d65e4d2fd5616d0788f8acb0";

  const navigate = useNavigate();
  return (
    <div className={s.card} onClick={() => navigate(`/detail/${id}`)}>
      <div className={s.image}>
        <img
          src={image ? image : imageNotFound}
          alt={image ? `${name} image` : "Not found image"}
        />
      </div>
      <div className={s.info}>
        <h3 className={s.name}>{name ? name : "Unknown"}</h3>
        <div className={s.moreInfo}>
          <BsInfoCircleFill />
          <span>More info</span>
        </div>
      </div>
    </div>
  );
}
