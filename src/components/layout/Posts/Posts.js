import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import LangContext from "contexts/LangContext";

const Posts = () => {
  const [data, setData] = useState(null);
  const { lang } = useContext(LangContext);
  let imageSource;

  useEffect(() => {
    fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        imageSource = data.chatBot.posts[0].imageSource;
        console.log(data.chatBot.posts[0].article);
        console.log(data.chatBot.posts[0].imageSource);
        console.log(data.chatBot.posts[0].title);
      })
      .catch();
  }, [lang]);

  return (
    <main>
      <h1></h1>
      <ul>
        <li>
          <Link to="/posts/1">
            <div>
              <button>
                <img src={imageSource} alt="alternate img"></img>
              </button>
              {/* <button><img src={content.imageSource} alt='alternate img'></img></button>
              <button className={classes.title}>{content.title}</button>
              <div>{content.article.slice(0, 100)}...</div>
              <button className={classes.link}>{content.link}</button> */}
            </div>
          </Link>
        </li>
        <li>
          <Link to="/posts/2">Warranty</Link>
        </li>
        <li>
          <Link to="/posts/3">Care</Link>
        </li>
      </ul>
    </main>
  );
};

export default Posts;
