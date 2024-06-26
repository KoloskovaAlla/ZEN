import { useEffect, useState } from 'react';
import SectionBase from 'components/layout/SectionBase';
import { useSelector } from 'react-redux';
import classes from './CashbackPage.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'reducers/currentPageSlice';

const CashbackPage = () => {
  const [data, setData] = useState(null);
  const { lang } = useSelector((state) => state.langReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/pages/cashback.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch();
  }, [lang]);

  useEffect(() => {
    dispatch(setCurrentPage('cashbackPage'));
  }, []);

  return (
    <main>
      {data?.intro && (
        <SectionBase className={classes.into} data={data.intro} />
      )}
      {data?.core && (
        <SectionBase className={classes.core} data={data.core} reverse />
      )}
      {data?.final && (
        <SectionBase className={classes.final} data={data.final} />
      )}
    </main>
  );
};

export default CashbackPage;
