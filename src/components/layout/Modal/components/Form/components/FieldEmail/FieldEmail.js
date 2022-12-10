import classes from './FieldEmail.module.scss'

const FieldEmail = ({
  placeholder,
  email,
  onEmailChange,
  isValidEmail
}) => {
  return (
    <label className={classes.email}>
      <input
        type='email'
        placeholder={placeholder}
        value={email}
        onChange={onEmailChange}
      />
      {!isValidEmail && email && <span>Некорректная почта</span>}
    </label>
  )
}

export default FieldEmail