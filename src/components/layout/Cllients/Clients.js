import classes from './Clients.module.scss'
import ClientsItem from './components/ClientsItem'
import ThemeContext from 'contexts/ThemeContext'
import { useContext } from 'react'

const Clients = ({ data }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <section id={data.name} className={classes.clients}>
      <div className={classes.wrapper}>
        <ul className={classes.list}>
          {theme === 'light'
            ? data.lightThemeClients.map((client, index) =>
              <ClientsItem
                client={client}
                key={`${index}`}
              />
            )

            : data.darkThemeClients.map((client, index) =>
              <ClientsItem
                client={client}
                key={`${index}`}
              />
            )
          }
        </ul>
      </div>
    </section>
  )
}

export default Clients