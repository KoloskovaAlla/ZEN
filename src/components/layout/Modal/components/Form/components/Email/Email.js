import './Email.scss'

const Email = ({
  placeholder,
  email,
  onEmailChange,
  isValidEmail
}) => {
  const className = 'email'

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value)
  //   const regularEmail = /[A-Z0-9]+@[A-Z0-9]+\.[A-Z]/i
  //   regularEmail.test(String(email))
  //     ? setIsValidEmail(true)
  //     : setIsValidEmail(false)
  //   console.log(regularEmail.test(String(email)))
  // }

  return (
    <label className={className}>
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

export default Email