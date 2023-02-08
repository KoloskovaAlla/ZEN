import classes from './Clients.module.scss';
import ClientsItem from './components/ClientsItem';
import ThemeContext from 'contexts/ThemeContext';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Clients = ({ data, hidden }) => {
  // const { theme } = useContext(ThemeContext)
  const { theme } = useSelector((state) => state.themeReducer);

  const [hiddenClients, setHiddenClients] = useState(false);
  const { currentPage } = useSelector((state) => state.currentPageReducer);

  useEffect(() => {
    // setIsIncludePosts(currentPage.includes('postsPage'));
    setHiddenClients(currentPage === 'clientsPage');
  }, [currentPage]);

  return (
    <section className={classes.clients}>
      {!hiddenClients && (
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
      )}
    </section>
  );
};

export default Clients;
