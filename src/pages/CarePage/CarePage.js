import classes from "./CarePage.module.scss";
import { useEffect, useState } from "react";
import Text from "components/common/Text";
import Title from "components/common/Title";

const CarePage = () => {
  const [data, setData] = useState(null);
  const lang = "en";
  const classNameBody = "body";

  useEffect(() => {
    fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/.json`)
      .then((response) => response.json())
      .then((data) => {     
        setData(data.care);
      })
      .catch();
  }, []);

  return (
    <div>
      {data && (
        <main>
          <div className={classes.wrapper}>
            <div className={classNameBody}>
              {data.title && (
                <Title className={classes.title} priority={data.title.priority}>
                  {data.title.content}
                </Title>
              )}

              {data.texts?.length > 0 &&
                data.texts.map((text, index) => (
                  <Text text={text} className={classes.copy} key={`${index}`} />
                ))}

              <ul className={classes.links}>
                {data.links?.length > 0 &&
                  data.links.map((link, index) => (
                    // <BrandLink link={link} key={`${index}`} />
                    <div></div>
                  ))}
              </ul>
            </div>

            {/* {data.image && (
          <Image
            className={classes.image}
            imageData={data.image}
          />)
        } */}

            {/* <Preview imageData={data.image} /> */}
          </div>
        </main>
      )}
    </div>
  );
};

export default CarePage;
