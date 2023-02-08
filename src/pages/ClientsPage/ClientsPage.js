import Title from 'components/common/Title';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'reducers/currentPageSlice';
import classes from './ClientsPage.module.scss';
import ClientsItem from 'components/layout/Cllients/components/ClientsItem'

const ClientsPage = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.langReducer);
  const {theme } = useSelector((state) => state.themeReducer);
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

  console.log(data);

  return (
    <div className={classes.wrapper}>
      {data && (
        <Title className={classes.title} priority={dataTitle.priority}>
          {dataTitle.content}
        </Title>
      )}
      {data && (
        <div>
          <ul className={classes.list}>
            {theme === 'light'
              ? data.lightThemeClients.map((client, index) => (
                  <ClientsItem client={client} key={`${index}`} />
                ))
              : data.darkThemeClients.map((client, index) => (
                  <ClientsItem client={client} key={`${index}`} />
                ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ClientsPage;
