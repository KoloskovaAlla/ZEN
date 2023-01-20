import { scrollToSection } from 'utils/helpers';
import classes from './MenuItem.module.scss';

const MenuItem = ({ menuItem, setIsMenuActive }) => {
  const handleMenuItemClick = (event) => {
    event.preventDefault();
    scrollToSection(menuItem.target);
    setIsMenuActive(false);
  };

  console.log(menuItem);

  return (
    <li className={classes.item}>
      <a onClick={handleMenuItemClick} href={menuItem.target}>
        {menuItem.text && menuItem.text}
      </a>
    </li>
  );
};

export default MenuItem;
