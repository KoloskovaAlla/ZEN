const handleWindowScroll = () => {
  const $progress = document.querySelector('#progress')
  const pageContentHeight = document.body.offsetHeight
  const windowHeight = window.innerHeight
  const clientPassed = window.scrollY
  const pageHiddenContentHeight = pageContentHeight - windowHeight
  const scrollPercentValue = clientPassed / pageHiddenContentHeight * 100
  $progress.value = scrollPercentValue
 }

export default handleWindowScroll