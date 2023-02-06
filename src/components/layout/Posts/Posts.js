import classes from './Posts.module.scss';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from './components/Button';
import Title from '../../common/Title';
import { useSelector } from 'react-redux';

const Posts = ({ data }) => {
  const dataWarranty = data.warranty;
  const dataCare = data.care;
  const dataClients = data.clients;
  const dataCashback = data.cashback;

  // const currentUrl = window.location.href;
  // console.log(currentUrl)
  const [currentUrl, setCurrentUrl] = useState(null);
  const [isIncludePosts, setIsIncludePosts] = useState(false);
  const { currentPage } = useSelector((state) => state.currentPageReducer);

  useEffect(() => {
    // setIsIncludePosts(currentPage.includes('postsPage'));
    setIsIncludePosts(currentPage === 'postsPage');
  }, [currentPage]);

  return (
    <div>
      {!isIncludePosts && (
        <section className={classes.posts}>
          <div className={classes.wrapper}>
            {data.title && (
              <Title
                priority={data.title.priority}
                className={classes.title}
                children={data.title.content}
              />
            )}
            <ul className={classes.list}>
              <li>
                <Link className={classes.post} to='/posts/warranty'>
                  <button className={classes.image}>
                    <img
                      src={dataWarranty.imageSource}
                      alt='alternate img'
                    ></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.titlePost}>
                      {dataWarranty.title}
                    </button>
                    <div className={classes.article}>
                      {dataWarranty.article.slice(0, 50)}...
                    </div>
                    <button className={classes.link}>Read more...</button>
                  </div>
                </Link>
              </li>
              <li>
                <Link className={classes.post} to='/posts/care'>
                  <button className={classes.image}>
                    <img src={dataCare.imageSource} alt='alternate img'></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.titlePost}>
                      {dataCare.title}
                    </button>
                    <div className={classes.article}>
                      {dataCare.article.slice(0, 49)}...
                    </div>
                    <button className={classes.link}>Read more...</button>
                  </div>
                </Link>
              </li>
              <li>
                <Link className={classes.post} to='/posts/cashback'>
                  <button className={classes.image}>
                    <img
                      src={dataCashback.imageSource}
                      alt='alternate img'
                    ></img>
                  </button>
                  <div className={classes.body}>
                    <button className={classes.titlePost}>
                      {dataCashback.title}
                    </button>
                    <div className={classes.article}>
                      {dataCashback.article.slice(0, 50)}...
                    </div>
                    <button className={classes.link}>Read more...</button>
                  </div>
                </Link>
              </li>
            </ul>
              <Button buttonText='more posts' />
          </div>
        </section>
      )}
    </div>
  );
};

export default Posts;