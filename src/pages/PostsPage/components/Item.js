import { Link } from 'react-router-dom';
import classes from './Item.module.scss';

export const Item = ({ data }) => {
  return (
    <li>
      <Link className={classes.post} to='/posts/warranty'>
        <button className={classes.image}>
          <img src={data.imageSource} alt='alternate img'></img>
        </button>
        <div className={classes.body}>
          <button className={classes.title}>{data.title}</button>
          <div className={classes.article}>{data.article.slice(0, 50)}...</div>
          <button className={classes.link}>Read more...</button>
        </div>
      </Link>
    </li>
  );
};
