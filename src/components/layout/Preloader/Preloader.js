import './Preloader.scss'
import cn from 'classnames'

const Preloader = ({ theme, currentLangValue }) => {

  // const className = theme === 'dark'
  //   ? 'preloader dark'
  //   : 'preloader'

  const classNames = cn('preloader', {
    'dark': theme === 'dark'
  })

  const text = currentLangValue === 'en'
    ? 'Loading...'
    : 'Загрузка страницы...'

  return (
    <div id="preloader" className={classNames}>
      <span>{text}</span>
    </div>
  )
}

export default Preloader