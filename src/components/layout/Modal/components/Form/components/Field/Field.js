const Field = ({inputDetails, parentClassName, name, setName}) => {
  const className = parentClassName
    ? `${parentClassName}__field`
    : 'field'

  const {type, placeholder} = inputDetails

  const handleNameChange = (event) => {
    setName(event.target.value) 
    
    switch (type) {
      default:
        // handleTextChange()
        break
      case 'tel':
        // handleTelChange()
        break
      case 'email':
        // handleEmailChange()
    }
  }

  return (
    <label className={className}>
      <input onChange={handleNameChange} type={type} placeholder={placeholder} />
    </label>
  )
}

export default Field