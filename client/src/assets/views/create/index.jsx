import CustomForm from "../../components/form";
import s from "./create.module.css";

export default function CreatePage({setIsLoading}) {

  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <h2 className={s.title}>Create your doggie!</h2>
        <CustomForm setIsLoading={setIsLoading}/>
      </div>
    </div>
  );
}
