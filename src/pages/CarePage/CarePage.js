import classes from './CarePage.module.scss';
import { useEffect, useState} from 'react';
import SectionBase from 'components/layout/SectionBase';
// import LangContext from "contexts/LangContext";
import { useSelector } from 'react-redux';

const CarePage = () => {
  const [data, setData] = useState(null);
  // const { lang } = useContext(LangContext);
  const { lang } = useSelector((state) => state.langReducer);

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
    <main>
      {data?.intro && <SectionBase className={classes.into} data={data.intro} />}
      {data?.core && <SectionBase className={classes.core} data={data.core} reverse />}
      {data?.final && <SectionBase className={classes.final} data={data.final} />}
    </main>
  );
};

export default CarePage;
