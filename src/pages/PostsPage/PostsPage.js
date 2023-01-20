import { Link } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import LangContext from 'contexts/LangContext';
// import classes from './PostsPage.module.scss';
import classes from './PostsPage2.module.scss';
import { API_BASE_URL } from 'constants/api';

const Posts = () => {
  const [data, setData] = useState(null);
  const { lang } = useContext(LangContext);
  const [dataWarranty, setDataWarranty] = useState(null);
  const [dataCare, setDataCare] = useState(null);
  const [dataCashback, setDataCashback] = useState(null);

  useEffect(() => {
    // fetch(`${API_BASE_URL}/${lang}/.json`)
    fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data.posts);
        setDataWarranty(data.posts.warranty);
        setDataCare(data.posts.care);
        setDataCashback(data.posts.cashback);
      })

      .catch();
  }, [lang]);

  return (
    <div>
      {data && (
        <main>
          <ul className={classes.posts}>
            <li>
              <Link className={classes.post} to='/posts/warranty'>
                <div className={classes.wrapper}>
                  <button className={classes.image}>
                    <img
                      src={dataWarranty.imageSource}
                      alt='alternate img'
                    ></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.title}>
                      {dataWarranty.title}
                    </button>
                    <div className={classes.article}>
                      {dataWarranty.article.slice(0, 50)}...
                    </div>
                    <button className={classes.link}>Подробнее...</button>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link className={classes.post} to='/posts/care'>
                <div className={classes.wrapper}>
                  <button className={classes.image}>
                    <img src={dataCare.imageSource} alt='alternate img'></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.title}>{dataCare.title}</button>
                    <div className={classes.article}>
                      {dataCare.article.slice(0, 50)}...
                    </div>
                    <button className={classes.link}>Подробнее...</button>
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link className={classes.post} to='/posts/cashback'>
                <div className={classes.wrapper}>
                  <button className={classes.image}>
                    <img
                      src={dataCashback.imageSource}
                      alt='alternate img'
                    ></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.title}>
                      {dataCashback.title}
                    </button>
                    <div className={classes.article}>
                      {dataCashback.article.slice(0, 50)}...
                    </div>
                    <button className={classes.link}>Подробнее...</button>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </main>
      )}
    </div>
  );
};

export default Posts;
