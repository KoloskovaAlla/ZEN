import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import LangContext from 'contexts/LangContext';
// import classes from './PostsPage.module.scss';
import classes from './PostsPage2.module.scss';
import { API_BASE_URL } from 'constants/api';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'reducers/currentPageSlice';
import { Item } from './components/Item';

const Posts = () => {
  const [data, setData] = useState(null);
  // const { lang } = useContext(LangContext);
  const { lang } = useSelector((state) => state.langReducer);
  const [dataWarranty, setDataWarranty] = useState(null);
  const [dataCare, setDataCare] = useState(null);
  const [dataCashback, setDataCashback] = useState(null);
  const [dataClients, setDataClients] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${API_BASE_URL}/${lang}/.json`)
      // fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.posts);
        setDataWarranty(data.posts.warranty);
        setDataCare(data.posts.care);
        setDataCashback(data.posts.cashback);
        setDataClients(data.posts.clients);
      })

      .catch();
  }, [lang]);

  useEffect(() => {
    dispatch(setCurrentPage('postsPage'));
  }, []);

  return (
    <div>
      {data && (
        <main>
          <ul className={classes.posts}>
            <Item data={dataCare} />
            <Item data={dataWarranty} />
            <Item data={dataCashback} />
            <Item data={dataClients} />
            <Item data={dataCare} />
            <Item data={dataWarranty} />
            <Item data={dataCashback} />
            <Item data={dataClients} />
          </ul>
        </main>
      )}
    </div>
  );
};

export default Posts;
