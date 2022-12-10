import classes from './Submit.module.scss'

const Submit = ({ buttonText, disabled }) => {  

  return (
    <button disabled={disabled} type="submit" className={classes.submit}>{buttonText}</button>
  )
}

export default Submit