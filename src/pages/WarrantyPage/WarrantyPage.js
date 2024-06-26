import { useEffect, useState } from 'react';
import SectionBase from 'components/layout/SectionBase';
import { useSelector, useDispatch } from 'react-redux';
import classes from './WarrantyPage.module.scss';
import { setCurrentPage } from 'reducers/currentPageSlice';

const WarrantyPage = () => {
  const [data, setData] = useState(null);
  const { lang } = useSelector((state) => state.langReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/pages/warranty.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch();
  }, [lang]);

  useEffect(() => {
    dispatch(setCurrentPage('warrantyPage'));
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

export default WarrantyPage;
