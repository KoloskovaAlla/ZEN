import classes from './Developer.module.scss'

const Developer = ({ developer }) => {
  const { url, content } = developer
  return (
    <a className={classes.developer} href={url}>
      <img
        src={content?.image?.source && content.image.source}
        alt={content?.image?.alternate && content.image.alternate}
      />
    </a>
  )
}

export default Developer