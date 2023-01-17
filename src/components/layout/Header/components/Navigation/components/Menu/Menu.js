import MenuItem from "./components/MenuItem/MenuItem";
import { classNames } from "utils/helpers";
import { useContext } from "react";
import ThemeContext from "contexts/ThemeContext";
import classes from "./Menu.module.scss";
import "./Menu.scss";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Cashback from "components/layout/Cashback";
// import Posts from "components/layout/Posts/Posts";

const Menu = ({ data, parentClassName, isMenuActive, setIsMenuActive }) => {
  const { theme } = useContext(ThemeContext);

  const classNameMenu = classNames(
    classes.menu,
    {
      [classes.active]: isMenuActive,
      dark: theme === "dark",
    },
    []
  );

  return (
    <ul className={classNameMenu} theme={theme}>
      {data.menuItems.length > 0 &&
        data.menuItems.map((menuItem, index) => (
          <li className={classes.item} key={index}>
            <NavLink
              to={`/${menuItem.target}`}
              // activeStyle={{ textDecoration: "underline" }}
              // className={"navLink"}
              // className={classes.navLink}
              className={({ isActive }) => (isActive ? "active" : "inactive")}
            >
              {menuItem.text}
            </NavLink>
          </li>
        ))}
    </ul>
  );

  // return (
  //   <ul className={classNameMenu} theme={theme} >
  //     {data.menuItems.length > 0 &&
  //       data.menuItems.map((menuItem, index) =>
  //         <MenuItem
  //           menuItem={menuItem}
  //           parentClassName={parentClassName}
  //           key={index}
  //           isMenuActive={isMenuActive}
  //           setIsMenuActive={setIsMenuActive}
  //         />
  //       )}
  //   </ul>
  // )

  // < ul className = {classNameMenu} theme = {theme} >
  // {
  //   data.menuItems.length > 0 &&
  //     data.menuItems.map((menuItem, index) =>
  //       <Routes>
  //         <Route
  //           path='/'
  //           element={<MenuItem
  //             menuItem={menuItem}
  //             parentClassName={parentClassName}
  //             key={index}
  //             isMenuActive={isMenuActive}
  //             setIsMenuActive={setIsMenuActive}
  //           />}
  //         >
  //           <Route
  //             path='/cashback'
  //             element={<Cashback />}
  //           />
  //           <Route
  //             path='/posts'
  //             element={<Posts />}
  //           />
  //         </Route>
  //       </Routes>
  //     )
  // }
  // </ul >
};

export default Menu;
