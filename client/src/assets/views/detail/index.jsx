import s from "./detail.module.css";
import { Link, useParams } from "react-router-dom";
import { GiDogHouse, GiWeight, GiLifeBar } from "react-icons/gi";
import { AiOutlineColumnHeight } from "react-icons/ai";
import { FaStream } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearInfo, getDetailDog } from "../../redux/actions/payloads";

export default function DetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogs.detailDog);
  // const [dog, setDog] = useState(detailDog);

  useEffect(() => {
    dispatch(getDetailDog(id));
    return () => {
      dispatch(clearInfo("detailDog"));
    };
  }, [id]);

  const imageNotFound =
    "https://img.freepik.com/vector-gratis/ilustracion-icono-camara_53876-5563.jpg?w=826&t=st=1688400604~exp=1688401204~hmac=09a96cac28785eaec30caec022ca0485d2b03d25d65e4d2fd5616d0788f8acb0";

  return (
    <div className={s.container}>
      <div className={s.details}>
        {(
          <>
            <div className={s.leftSide}>
              <img
                src={dog.image ? dog.image : imageNotFound}
                alt={dog.image ? `${dog.name} image` : "Not found image"}
              />
            </div>
            <div className={s.rightSide}>
              <h2 className={s.breed}>{dog.name ? dog.name : "Unknown"}</h2>
              <div className={s.weight}>
                <div>
                  <GiWeight />
                  <span>Weight</span>{" "}
                </div>
                <p>{dog.weight ? `${dog.weight} kg` : "Unknown"}</p>
              </div>
              <div className={s.height}>
                <div>
                  <AiOutlineColumnHeight />
                  <span>Height</span>{" "}
                </div>
                <p>{dog.height ? `${dog.height} cm` : "Unknown"}</p>
              </div>
              <div className={s.lifeSpan}>
                <div>
                  <GiLifeBar />
                  <span>Life span</span>{" "}
                </div>
                <p>{dog.life_span ? dog.life_span : "Unknown"}</p>
              </div>
              <div className={s.bredFor}>
                <div>
                  <GiDogHouse />
                  <span>Bred for</span>{" "}
                </div>
                <p>{dog.bred_for ? dog.bred_for : "Unknown"}</p>
              </div>
              <div className={s.temperaments}>
                <div>
                  <FaStream />
                  <span>Temperaments</span>{" "}
                </div>
                <p>
                  {dog.Temperaments ? dog.Temperaments.join(", ") : "Unknown"}
                </p>
              </div>
            </div>
          </>
        )}
      </div>
      <Link to="/home" className="backToHomeLink">
        <IoMdArrowRoundBack />
        {"Back to Home"}
      </Link>
    </div>
  );
}
