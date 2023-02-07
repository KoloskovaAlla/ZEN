import Title from 'components/common/Title';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'reducers/currentPageSlice';
import classes from './ClientsPage.module.scss';

const ClientsPage = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.langReducer);
  const [data, setData] = useState(null);
  const [dataTitle, setDataTitle] = useState(null);

  useEffect(() => {
    fetch(
      `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/pages/clients.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setDataTitle(data.title);
      })
      .catch();
  }, [lang]);

  useEffect(() => {
    dispatch(setCurrentPage('clientsPage'));
  }, []);

  return (
    <div className={classes.wrapper}>
      {data && (
        <Title className={classes.title} priority={dataTitle.priority}>
          {dataTitle.content}
        </Title>
      )}
    </div>
  );
};

export default ClientsPage;
