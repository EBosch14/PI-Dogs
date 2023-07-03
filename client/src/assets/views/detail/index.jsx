import s from "./detail.module.css";
import { Link } from "react-router-dom";
import { GiDogHouse, GiWeight, GiLifeBar } from "react-icons/gi";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { FaStream } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function DetailPage() {
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

  return (
    <div className={s.container}>
      <div className={s.details}>
        <div className={s.leftSide}>
          <img
            src={data.image ? data.image : imageNotFound}
            alt={data.image ? `${data.name} image` : "Not found image"}
          />
        </div>
        <div className={s.rightSide}>
          <h2 className={s.breed}>{data.name ? data.name : "Unknown"}</h2>
          <div className={s.weight}>
            <div>
              <GiWeight />
              <span>Weight</span>{" "}
            </div>
            <p>{data.weight ? `${data.weight} kg` : "Unknown"}</p>
          </div>
          <div className={s.height}>
            <div>
              <AiOutlineColumnHeight />
              <span>Height</span>{" "}
            </div>
            <p>{data.height ? `${data.height} cm` : "Unknown"}</p>
          </div>
          <div className={s.lifeSpan}>
            <div>
              <GiLifeBar />
              <span>Life span</span>{" "}
            </div>
            <p>{data.life_span ? data.life_span : "Unknown"}</p>
          </div>
          <div className={s.bredFor}>
            <div>
              <GiDogHouse />
              <span>Bred for</span>{" "}
            </div>
            <p>{data.bred_for ? data.bred_for : "Unknown"}</p>
          </div>
          <div className={s.temperaments}>
            <div>
              <FaStream />
              <span>Temperaments</span>{" "}
            </div>
            <p>
              {data.Temperaments ? data.Temperaments.join(", ") : "Unknown"}
            </p>
          </div>
        </div>
      </div>
      <Link to="/home" className="backToHomeLink">
        <IoMdArrowRoundBack />
        {"Back to Home"}
      </Link>
    </div>
  );
}
