import classes from './ClientsItem.module.scss'

const ClientsItem = ({ client }) => {
  return (
    <li className={classes.item}>
      <img
        src={client?.source && client.source}
        alt={client?.alternate && client.alternate}
      />
    </li>
  )
}

export default ClientsItem