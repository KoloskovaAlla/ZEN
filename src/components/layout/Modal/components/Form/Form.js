// import Field from './components/Field'
import FieldName from './components/FieldName'
import FieldTel from './components/FieldTel'
import FieldEmail from './components/FieldEmail'
import Connection from './components/Connection'
import Policy from './components/Policy'
import Submit from './components/Submit'
import { useState } from 'react'
import classes from './Form.module.scss'
import { validateName, validateTel, validateEmail, validateConnect } from 'utils/helpers'
import ModalContext from 'contexts/ModalContext'
import { useContext } from 'react'

const date = new Date().toLocaleString()
console.log(date)

const Form = ({ form, isDataSent, setIsDataSent }) => {
  const [name, setName] = useState('')
  const [isValidName, setIsValidName] = useState(true)

  const [tel, setTel] = useState('')
  const [isValidTel, setIsValidTel] = useState(true)

  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(true)

  const [connect, setConnect] = useState('')
  const [isValidConnect, setIsValidConnect] = useState(true)

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true)

  const [isChecked, setIsChecked] = useState(false)

  const { setIsModalActive } = useContext(ModalContext)

  const {
    inputName,
    inputTel,
    inputEmail,
    connection,
    inputPolicy,
    buttonText
  } = form

  const handleNameChange = ({ target }) => {
    const value = target.value
    setName(value)
    setIsValidName(validateName(value))
  }

  const handleTelChange = ({ target }) => {
    const value = target.value
    setTel(value)
    setIsValidTel(validateTel(value))
  }

  const handleEmailChange = ({ target }) => {
    const value = target.value
    setEmail(value)
    setIsValidEmail(validateEmail(value))
  }

  const handleConnectChange = ({ target }) => {
    const value = target.value
    setConnect(value)
    setIsValidConnect(validateConnect(value))
  }

  const handleFormInput = () => {
    name &&
      isValidName &&
      tel &&
      isValidTel &&
      email &&
      isValidEmail &&
      connect &&
      isValidConnect &&
      isChecked
      ? setIsSubmitDisabled(false)
      : setIsSubmitDisabled(true)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const order = {
      date,
      name: name,
      tel: tel,
      email: email,
      connection: connect,
      // policy: form.checkbox.checked
    }

    fetch('https://zenproject-ce905-default-rtdb.firebaseio.com/orders/.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(order)
    })
      .then((response) => {

        if (response.ok) {
          setIsDataSent(true)
          setTimeout(() => {
            setIsModalActive(false)
            setIsDataSent(false)
          }, 3000)
        }
      })
      .catch((error) => { console.error(error.message) })
  }

  for (let index = 0; index < name.length; index++) {   
   
    if (name[index] === name[index].toLowerCase() && index === 0 ) {  
      setName(name.replace(name[index], name[index].toUpperCase()))        
    }
    if (name[index] === name[index].toLowerCase() && index!==0 && name[index-1]===' ') {
      setName(name.replace(name[index], name[index].toUpperCase())) 
    }
  } 

  return (

    <form onInput={handleFormInput} onSubmit={handleFormSubmit} className={classes.form}>
      {inputName && (
        <FieldName
          name={name}
          setName={setName}
          onNameChange={handleNameChange}
          isValidName={isValidName}
          placeholder='Name'
        />
      )}

      {inputTel && (
        <FieldTel
          tel={tel}
          onTelChange={handleTelChange}
          isValidTel={isValidTel}
          placeholder='Telphone number'
        />
      )}

      {inputEmail && (
        <FieldEmail
          email={email}
          onEmailChange={handleEmailChange}
          isValidEmail={isValidEmail}
          placeholder='Email'
        />)}

      <Connection
        connect={connect}
        onConnectChange={handleConnectChange}
        isValidConnection={isValidConnect}
        connection={connection}
      />

      <Policy inputPolicy={inputPolicy} isChecked={isChecked} setIsChecked={setIsChecked} />

      <Submit
        buttonText={buttonText}
        disabled={isSubmitDisabled}
      />
    </form>
  )
}

export default Form