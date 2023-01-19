import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import classes from './Post.module.scss';

export const Post = () => {
  const params = useParams();
  const { id } = params;

  const lang = 'en';
  const [data, setData] = useState(null);

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
