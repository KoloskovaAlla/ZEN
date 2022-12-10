import PreviewContext from 'contexts/PreviewContext'
import { useState, useEffect } from 'react'

const PreviewProvider = ({ children }) => {

  const [previewDetails, setPreviewDetails] = useState(null)

  const [isDarkClicked, setIsDarkClicked] = useState(false)

  const value = {
    previewDetails, setPreviewDetails, isDarkClicked, setIsDarkClicked
  }

  useEffect(() => {
    previewDetails
      ? document.body.style.overflow = 'hidden'
      : document.body.style.overflow = ''
  }, [previewDetails])

  return (
    <PreviewContext.Provider value={value}>
      {children}
    </PreviewContext.Provider>
  )
}

export default PreviewProvider