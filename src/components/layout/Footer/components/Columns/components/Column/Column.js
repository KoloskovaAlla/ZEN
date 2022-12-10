import Title from 'components/common/Title'
import List from './components/List'
import classes from './Column.module.scss'


const Column = ({ column, parentClassName }) => {

  const { title, links } = column

  const className = 'column'


  return (
    <li className={className}>
      {title && (
        <Title
          priority={title.priority}
          className={classes.title}
          children={title.content}
        />
      )}

      {links?.length > 0 && (
        <List
          links={links}
          parentClassName={parentClassName}
        />
      )}
    </li>
  )
}

export default Column