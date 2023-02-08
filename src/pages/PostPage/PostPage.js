import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './PostPage.module.scss';
import { useDispatch } from 'react-redux';
import { setCurrentPage } from 'reducers/currentPageSlice';

export const PostPage = () => {
  const params = useParams();
  const { id } = params;

  const lang = 'en';
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/posts/.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data[id]);
      })
      .catch();
  }, [lang, id]);

  useEffect(() => {
    dispatch(setCurrentPage('postPage'));
  }, []);

  if (data) console.log(data)

  return (
    <div>
      {data && (
        <main className={classes.page}>
          <div className={classes.wrapper}>
            <div className={classes.body}>
              <h2 className={classes.title}>{data[id].title}</h2>
              <div className={classes.article}>{data[id].article}</div>
            </div>
            <div className={classes.image}>
              <img src={data[id].imageSource} alt=''></img>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};
