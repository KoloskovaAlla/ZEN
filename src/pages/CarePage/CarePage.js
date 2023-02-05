import classes from './CarePage.module.scss';
import { useEffect, useState} from 'react';
import SectionBase from 'components/layout/SectionBase';
// import LangContext from "contexts/LangContext";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'reducers/currentPageSlice';

const CarePage = () => {
  const [data, setData] = useState(null);
  // const { lang } = useContext(LangContext);
  const { lang } = useSelector((state) => state.langReducer);
  const {currentPage} = useSelector((state) => state.currentPageReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch(
      `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/pages/care.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch();
  }, [lang]);

  useEffect(() => {
    dispatch(setCurrentPage('carePage'))
  }, [])

  return (
    <main>
      {data?.intro && <SectionBase className={classes.into} data={data.intro} />}
      {data?.core && <SectionBase className={classes.core} data={data.core} reverse />}
      {data?.final && <SectionBase className={classes.final} data={data.final} />}
    </main>
  );
};

export default CarePage;
