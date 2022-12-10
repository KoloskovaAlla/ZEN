const Select = ({options, connect, onConnectChange, isValidConnec }) => {

  return (
    <select 
      value={connect}
      onChange={onConnectChange}    
    >
      <option value=''></option>
      {options.length > 0 && (options.map((option, index) =>
        <option value={option.value} key={index}>
          {option.content}
        </option>
      ))}
    </select>
  )
}

export default Select