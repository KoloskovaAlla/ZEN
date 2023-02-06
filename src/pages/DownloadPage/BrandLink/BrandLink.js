import { ReactComponent as AppleIcon } from './assets/btn-apple.svg'
import { ReactComponent as GoogleIcon } from './assets/btn-google.svg'
import './BrandLink.scss'

const BrandLink = ({ link }) => {
  const className = 'link'

  return (
    <li className={className}>
      <a href={link.url && link.url}>
        {link.name === 'apple'
          ? <AppleIcon />
          : <GoogleIcon />
        }
      </a>
    </li>
  )
}

export default BrandLink
