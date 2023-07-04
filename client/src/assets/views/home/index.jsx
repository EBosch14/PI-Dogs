import Card from "../../components/card"
import CustomSelect from "../../components/select"
import s from "./home.module.css"

export default function Home() {
  return(
    <div className={s.container}>
      {/* <Card/> */}
      <CustomSelect/>
    </div>
  )
}