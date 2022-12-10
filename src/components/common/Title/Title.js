const Title = ({ priority, parentClassName, children, ...other }) => {
  const className = parentClassName
    ? `${parentClassName}__title`
    : 'title'

  switch (priority) {
    default: return <h1 className={className} {...other}>{children}</h1>
    case 2: return <h2 className={className} {...other}>{children}</h2>
    case 3: return <h3 className={className} {...other}>{children}</h3>
    case 4: return <h4 className={className} {...other}>{children}</h4>
    case 5: return <h5 className={className} {...other}>{children}</h5>
    case 6: return <h6 className={className} {...other}>{children}</h6>
  }
}

export default Title