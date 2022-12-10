import classes from './Title.module.scss'

const Title = ({ titleData }) => {
  return (
    <h3 className={classes.title}> {titleData.content}</h3 >
  )
}

export default Title