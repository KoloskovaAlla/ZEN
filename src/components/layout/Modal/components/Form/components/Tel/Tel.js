import './Tel.scss'

const Tel = ({ inputDetails, tel, setTel, isValidTel, setIsValidTel }) => {
  const className = 'tel'

  const { type, placeholder } = inputDetails

  const handleTelChange = (event) => {
    setTel(event.target.value)
    // console.log(event.target.value)
    const regularTel = /[0-9]{9}/
    regularTel.test(String(tel))
      ? setIsValidTel(true)
      : setIsValidTel(false)
    console.log(regularTel.test(String(tel)))
  }

  return (
    <label className={className}>
      <input onChange={handleTelChange} value={tel} type={type} placeholder={placeholder} />
    </label>
  )
}

export default Tel