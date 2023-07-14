import loadingGIF from "/doggie-waiting.gif";
import s from "./screenLoading.module.css"

export default function ScreenLoading() {
  return (
    <div className={s.container}>
      <img className={s.image} src={loadingGIF} alt="doggie-waiting" />
      <p className={s.textWaiting}>Waiting for the puppies 🐶</p>
    </div>
  );
}