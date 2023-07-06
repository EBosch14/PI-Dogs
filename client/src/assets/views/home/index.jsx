import s from "./home.module.css";
import Cards from "../../components/cards";
import Filters from "../../components/filters";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions/payloads";

export default function Home() {
  //Redux
  const dispatch = useDispatch();
  const allDogs = useSelector((state) => state.dogs.filterDogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalDogs = allDogs?.length || 0;
  const pageSize = 9;
  const totalPages = Math.ceil(totalDogs / pageSize);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
  }, [currentPage, totalPages]);

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={s.container}>
      <div className={s.filters}>
        <Filters />
      </div>
      <Cards allDogs={allDogs} currentPage={currentPage} pageSize={pageSize} />
      <div className={s.pagesContainer}>
        {pages.map((page) => (
          <button
            className={`${s.pageBtn} ${page === currentPage ? s.active : ""}`}
            key={page}
            onClick={() => handlePage(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}
