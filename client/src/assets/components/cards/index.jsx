import Card from "../card";
import s from "./cards.module.css";

export default function Cards({ allDogs, currentPage, pageSize }) {

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentDogs = allDogs?.slice(startIndex, endIndex);

  return (
    <div className={s.cardsContainer}>
      {currentDogs?.length > 0 &&
        currentDogs.map((dog) => (
          <Card key={dog.id} name={dog.name} image={dog.image} id={dog.id} />
        ))}
    </div>
  );
}
