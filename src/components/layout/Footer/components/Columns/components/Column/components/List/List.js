import ListItem from './components/ListItem'
import classes from './List.module.scss'

const List = ({ links, parentClassName }) => {

  return (
    <ul className={classes.list}>
      {links.length > 0 && (
        links.map((link, index) =>
          <ListItem
            link={link}
            parentClassName={parentClassName}
            key={index}
          />)
      )}
    </ul>
  )
}

export default List
