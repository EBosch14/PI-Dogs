import s from "./home.module.css";
import Cards from "../../components/cards";
import Filters from "../../components/filters";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs } from "../../redux/actions/payloads";
import ScreenLoading from "../../components/screenLoading";

export default function Home({ allDogs, isLoading }) {
  //Redux
  // const dispatch = useDispatch();
  // const allDogs = useSelector((state) => state.dogs.filterDogs);
  // // const allDogs = []

  // useEffect(() => {
  //   dispatch(getDogs());
  // }, [dispatch]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalDogs = allDogs?.length || 0;
  const pageSize = 9;
  const totalPages = Math.ceil(totalDogs / pageSize);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(1);
    window.scrollTo(top);
  }, [currentPage, totalPages]);

  const handlePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={s.container}>
      <div className={s.filters}>
        <Filters />
      </div>
      {isLoading ? (
        <ScreenLoading />
      ) : allDogs?.length !== 0 ? (
        <>
          <Cards
            allDogs={allDogs}
            currentPage={currentPage}
            pageSize={pageSize}
          />
          <div className={s.pagesContainer}>
            {pages.map((page) => (
              <button
                className={`${s.pageBtn} ${
                  page === currentPage ? s.active : ""
                }`}
                key={page}
                onClick={() => handlePage(page)}
              >
                {page}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className={s.errorMessage}>
          <p>Cannot find the dogs :(</p>
        </div>
      )}
    </div>
  );
}
