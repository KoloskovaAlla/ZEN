import Link from './components/Link'
import classes from './ListItem.module.scss'

const ListItem = ({ link, parentClassName }) => {
  return (
    <li className={classes.item}>
      <Link link={link} />
    </li>
  )
}

export default ListItem