import SectionBase from 'components/layout/SectionBase';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from 'reducers/currentPageSlice';
import classes from './DownloadPage.module.scss'
import Title from 'components/common/Title';
import Text from 'components/common/Text'
import Image from 'components/common/Image'
import BrandLink from './BrandLink';

const DownloadPage = () => {
  const dispatch = useDispatch();
  const { lang } = useSelector((state) => state.langReducer);
  const [data, setData] = useState(null)

    useEffect(() => {
      fetch(
        `https://zenproject-ce905-default-rtdb.firebaseio.com/${lang}/pages/download.json`
      )
        .then((response) => response.json())
        .then((data) => {
          setData(data);
        })
        .catch();
    }, [lang]);

  useEffect(() => {
    dispatch(setCurrentPage('downloadPage'));
  }, []);

  return (
    <main className={classes.section}>
      {data && (
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

            <ul className={classes.links}>
              {data.links?.length > 0 &&
                data.links.map((link, index) => (
                  <BrandLink link={link} key={`${index}`} />
                ))}
            </ul>
          </div>

          {data.image && (
          <Image
            className={classes.image}
            imageData={data.image}
          />)
        }
        </div>
      )}
    </main>
  );
};

export default DownloadPage;
