import CustomForm from "../../components/form";
import s from "./create.module.css";

export default function CreatePage() {

  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <h2 className={s.title}>Create your doggie!</h2>
        <CustomForm/>
      </div>
    </div>
  );
}
