import Columns from './components/Columns/Columns'
import Info from './components/Info'
import classes from './Footer.module.scss'

const Footer = ({ data }) => {
  const { columns, infoData } = data

  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        {columns?.length > 0 && (
          <Columns
            columns={columns}
          />
        )}

        {infoData && (
          <Info
            infoData={infoData}
          />
        )}
      </div>
    </footer>
  )
}

export default Footer