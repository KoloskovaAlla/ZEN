import classes from './FieldName.module.scss'
import {classNames} from 'utils/helpers'

const FieldName = ({
  placeholder,
  name,
  onNameChange,
  isValidName,
  setName
}) => {
  const className = classNames(classes.name, {
    [classes.succes]: isValidName  
  }, [])

  return (
    <label className={className}>
      <input
        type='text'
        placeholder={placeholder}
        value={name}
        onChange={onNameChange}
      />
      {!isValidName && name && <span>Некорректное имя</span>}
    </label>
  )
}

export default FieldName