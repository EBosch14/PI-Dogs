import Card from "../card";
import s from "./cards.module.css"

export default function Cards({allDogs}) {
  return(
    <div className={s.cardsContainer}>
        {allDogs?.length > 0 &&
          allDogs.map((dog, i) => (
            <Card key={dog.id} name={dog.name} image={dog.image} id={dog.id} />
          ))}
      </div>
  )
}