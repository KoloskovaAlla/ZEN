import classes from "./CarePage.module.scss";
import { useEffect, useState, useContext } from "react";
import Text from "components/common/Text";
import Title from "components/common/Title";
import Image from "components/common/Image";
import LangContext from "contexts/LangContext";

const CarePage = () => {
  const [data, setData] = useState(null);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    fetch(
      `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/pages/care.json`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch();
  }, [lang]);

  console.log(data);

  return (
    <div>
      {data && (
        <main className={classes.page}>
          <div className={classes.wrapper}>
            <div className={classes.body}>
              {data.intro.title && (
                <Title
                  className={classes.title}
                  priority={data.intro.title.priority}
                >
                  {data.intro.title.content}
                </Title>
              )}

              {data.intro.texts?.length > 0 &&
                data.intro.texts.map((text, index) => (
                  <Text text={text} className={classes.copy} key={`${index}`} />
                ))}
            </div>

            {data.intro.image && (
              <Image className={classes.image} imageData={data.intro.image} />
            )}

            {data.core.image && (
              <Image className={classes.image} imageData={data.core.image} />
            )}

            <div className={classes.body}>
              <Title
                className={classes.titleCore}
                priority={data.core.title.priority}
              >
                {data.core.title.content}
              </Title>

              {data.core.texts?.length > 0 &&
                data.core.texts.map((text, index) => (
                  <Text text={text} className={classes.copy} key={`${index}`} />
                ))}
            </div>

            <div className={classes.body}>
              <Title
                className={classes.titleFinal}
                priority={data.final.title.priority}
              >
                {data.final.title.content}
              </Title>

              {data.final.texts?.length > 0 &&
                data.final.texts.map((text, index) => (
                  <Text text={text} className={classes.copy} key={`${index}`} />
                ))}
            </div>

            {data.final.image && (
              <Image className={classes.image} imageData={data.final.image} />
            )}

            {/* <Preview imageData={data.image} /> */}
          </div>
        </main>
      )}
    </div>
  );
};

export default CarePage;
