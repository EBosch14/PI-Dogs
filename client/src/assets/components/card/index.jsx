import s from "./card.module.css";
import { useNavigate } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";

export default function Card() {
  const data = {
    weight: "25 - 34",
    height: "55 - 61",
    id: 121,
    name: "Golden Retriever",
    bred_for: "Retrieving",
    breed_group: "Sporting",
    life_span: "10 - 12 years",
    image: "https://cdn2.thedogapi.com/images/HJ7Pzg5EQ.jpg",
    Temperaments: [
      "Intelligent",
      "Kind",
      "Reliable",
      "Friendly",
      "Trustworthy",
      "Confident",
    ],
  };

  const imageNotFound =
    "https://img.freepik.com/vector-gratis/ilustracion-icono-camara_53876-5563.jpg?w=826&t=st=1688400604~exp=1688401204~hmac=09a96cac28785eaec30caec022ca0485d2b03d25d65e4d2fd5616d0788f8acb0";

  const navigate = useNavigate();
  return (
    <div className={s.card} onClick={() => navigate(`/detail/${data.id}`)}>
      <div className={s.image}>
        <img
          src={data.image ? data.image : imageNotFound}
          alt={data.image ? `${data.name} image` : "Not found image"}
        />
      </div>
      <div className={s.info}>
        <h3 className={s.name}>{data.name ? data.name : "Unknown"}</h3>
        <div className={s.moreInfo}>
          <BsInfoCircleFill />
          <span>More info</span>
        </div>
      </div>
    </div>
  );
}
