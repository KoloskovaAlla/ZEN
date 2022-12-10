const Link = ({ link }) => {
  const { type, url, content } = link

  switch (type) {
    case 'image':
      return (
        <a href={url}>
          <img
            src={content?.image?.source && content.image.source}
            alt={content?.image?.alternate && content.image.alternate}
          />
        </a>
      )

    case 'email':
      return (
        <a href={url}>
          {content?.email && content.email}
        </a>
      )

    default:
      return (
        <a href={url}>
          {content?.text && content.text}
        </a>
      )
  }
}

export default Link
