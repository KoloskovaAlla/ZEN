import './Name.scss'

const Name = ({ inputDetails, parentClassName, name, setName, isValidName, setIsValidName }) => {
  // const className = parentClassName
  //   ? `${parentClassName}__field`
  //   : 'field'

  const className = 'name'

  const { type, placeholder } = inputDetails

  const handleNameChange = (event) => {
    setName(event.target.value)
    // const regularName = /^([А - Я]{1}[а-яё]{1, 23}| [A - Z]{1} [a - z]{1, 23})$
    const regularName = /(^[A-Z])[a-z]{0,15}|(^[А-Я])[а-я]{0,15}/
    regularName.test(String(name))
      ? setIsValidName(true)
      : setIsValidName(false)
  }

  return (
    <label className={className}>
      <input onChange={handleNameChange} value={name} type={type} placeholder={placeholder} />
    </label>
  )
}

export default Name