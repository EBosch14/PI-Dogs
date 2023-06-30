import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { PiDog, PiBoneFill } from "react-icons/pi";
import { TbDog } from "react-icons/tb";
import { LuDog } from "react-icons/lu";
import { Link } from "react-router-dom";
import s from "./landing.module.css";
import { useState } from "react";

export default function LandigPage(props) {
  const images = [
    "https://img.freepik.com/foto-gratis/retrato-mascota-adorable-aislado_23-2149192357.jpg?w=1380&t=st=1688074368~exp=1688074968~hmac=f5356776478212a3992619595c55d81afb5be56d77576c3e5bb9e672be10756a",
    "https://img.freepik.com/foto-gratis/adorable-perro-basenji-marron-blanco-sonriendo-dando-maximo-cinco-aislado-blanco_346278-1657.jpg?size=626&ext=jpg&uid=R79611226&semt=sph",
    "https://img.freepik.com/foto-gratis/bulldog-frances-marron-joven-jugando-aislado-sobre-fondo-blanco-estudio_155003-46058.jpg?size=626&ext=jpg&uid=R79611226&semt=sph",
    "https://img.freepik.com/foto-gratis/carrera-perrito-maltipu-planteando_155003-22631.jpg?size=626&ext=jpg&uid=R79611226&semt=sph",
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const selectNewImage = (index, images, next = true) => {
    const condition = next ? selectedIndex < images.length - 1 : selectedIndex > 0;
    const nextIndex = next
      ? condition
        ? selectedIndex + 1
        : 0
      : condition
      ? selectedIndex - 1
      : images.length - 1;
    setSelectedImage(images[nextIndex]);
    setSelectedIndex(nextIndex);
  };

  const previus = () => {
    selectNewImage(selectedIndex, images, false);
  };

  const next = () => {
    selectNewImage(selectedIndex, images);
  };

  return (
    <div className={s.container}>
      <div className={s.landing}>
        <div className={s.leftContainer}>
          <div className={s.welcome}>
            <h1 className={s.title}>Pretty Dogs!</h1>
            <div className={s.iconsContainer}>
              <PiBoneFill />
              <LuDog />
              <PiDog />
              <TbDog />
              <PiBoneFill />
            </div>
            <p className={s.description}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eius
              libero ad velit sed veniam perferendis temporibus minus modi vero,
              quas et vitae minima excepturi.
            </p>
          </div>
          <Link to="/home" className={s.button} onClick={props.validateLogin}>
            Come On!
          </Link>
        </div>
        <div className={s.rightContainer}>
          <button className={s.leftButton} onClick={previus}>
            <FaChevronLeft />
          </button>
          <div className={s.imgContainer}>
            <img src={selectedImage} alt="Doggie" />
          </div>
          <button className={s.rightButton} onClick={next}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
}
