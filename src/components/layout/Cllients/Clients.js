import classes from './Clients.module.scss';
import ClientsItem from './components/ClientsItem';
import ThemeContext from 'contexts/ThemeContext';
import { useContext } from 'react';
import { useSelector } from 'react-redux';

const Clients = ({ data }) => {
  // const { theme } = useContext(ThemeContext)
  const { theme } = useSelector((state) => state.themeReducer);

  return (
    <section className={classes.clients}>
      <div className={classes.wrapper}>
        <ul className={classes.list}>
          {theme === 'light'
            ? data.lightThemeClients.map((client, index) => (
                <ClientsItem client={client} key={`${index}`} />
              ))
            : data.darkThemeClients.map((client, index) => (
                <ClientsItem client={client} key={`${index}`} />
              ))}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
