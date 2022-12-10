import classes from './FieldTel.module.scss'

const FieldTel = ({
  placeholder,
  tel,
  onTelChange,
  isValidTel
}) => {
  return (
    <label className={classes.tel}>
      <input
        type='tel'
        placeholder={placeholder}
        value={tel}
        onChange={onTelChange}
      />
      {!isValidTel && tel && <span>Некорректный номер</span>}
    </label>
  )
}

export default FieldTel