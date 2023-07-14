import s from "./screenLoading.module.css"

export default function ScreenLoading() {
  return (
    <div className={s.container}>
      <img className={s.image} src="/doggie-waiting.gif" alt="doggie-waiting" />
      <p className={s.textWaiting}>Waiting for the puppies 🐶</p>
    </div>
  );
}