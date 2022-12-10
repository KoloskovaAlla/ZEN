import Column from './components/Column'
import classes from './Columns.module.scss'

const Columns = ({ columns }) => {

  return (
    <ul className={classes.columns}>
      {columns?.length > 0 && (
        columns.map((column, index) =>
          <Column
            column={column}
            key={index}
          />)
      )}
    </ul>
  )
}

export default Columns