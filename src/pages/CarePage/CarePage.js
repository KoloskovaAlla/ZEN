import classes from "./CarePage.module.scss";
import { useEffect, useState, useContext } from "react";
import Text from "components/common/Text";
import Title from "components/common/Title";
import Image from 'components/common/Image'
import LangContext from 'contexts/LangContext';

const CarePage = () => {
  const [data, setData] = useState(null);
  const { lang } = useContext(LangContext);

  useEffect(() => {
    fetch(`https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/pages/care.json`)
      .then((response) => response.json())
      .then((data) => {     
        setData(data);
      })
      .catch();
  }, [lang]);

  console.log(data)

  return (
    <div>
      {data && (
        <main className={classes.page}>
          <div className={classes.wrapper}>
            <div className={classes.body}>
              {data.title && (
                <Title className={classes.title} priority={data.title.priority}>
                  {data.title.content}
                </Title>
              )}

              {data.texts?.length > 0 &&
                data.texts.map((text, index) => (
                  <Text text={text} className={classes.copy} key={`${index}`} />
                ))}
            </div>

            {data.image && (
              <Image className={classes.image} imageData={data.image} />
            )}

            {data.image && (
              <Image className={classes.image} imageData={data.image} />
            )}

            <div className={classes.body}>
     

              {data.texts?.length > 0 &&
                data.texts.map((text, index) => (
                  <Text text={text} className={classes.copy} key={`${index}`} />
                ))}
            </div>

            <div className={classes.body}>
   

              {data.texts?.length > 0 &&
                data.texts.map((text, index) => (
                  <Text text={text} className={classes.copy} key={`${index}`} />
                ))}
            </div>

            {data.image && (
              <Image className={classes.image} imageData={data.image} />
            )}

            {/* <Preview imageData={data.image} /> */}
          </div>
        </main>
      )}
    </div>
  );
};

export default CarePage;
