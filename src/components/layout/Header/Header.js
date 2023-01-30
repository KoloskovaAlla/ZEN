import { useState, useContext } from 'react';
import Navigation from './components/Navigation';
import Language from './components/Language';
import Theme from './components/Theme/Theme';
import Burger from './components/Burger';
// import './Header.scss'
import classes from './Header.module.scss';
import ThemeContext from '../../../contexts/ThemeContext';
import { classNames } from 'utils/helpers';
import { useSelector } from 'react-redux';

const Header = ({ data, langValue }) => {
  // const { theme } = useContext(ThemeContext)
  const { theme } = useSelector((state) => state.themeReducer);

  const classNameHeader = classNames(
    classes.header,
    {
      dark: theme === 'dark',
    },
    []
  );

  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <header id={data.name} className={classNameHeader}>
      <div className={classes.wrapper}>
        <Navigation
          data={data}
          isMenuActive={isMenuActive}
          setIsMenuActive={setIsMenuActive}
        />

        {data.languages?.length > 0 && (
          <Language languages={data.languages} currentLangValue={langValue} />
        )}

        <Theme parentClassName={classes.theme} />

        <Burger isMenuActive={isMenuActive} setIsMenuActive={setIsMenuActive} />
      </div>
    </header>
  );
};

export default Header;
