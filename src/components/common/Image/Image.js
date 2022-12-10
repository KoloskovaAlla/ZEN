const Image = ({ className, imageData }) => {
  // if (typeof imageData !== 'object' ||
  //   !Object.keys(imageData).length) {
  //   return ''
  // }


  return (
    <div className={className}>
      <img
        src={imageData?.source && imageData.source}
        alt={imageData?.alternate && imageData.alternate}
      />
    </div>
  )
}

export default Image