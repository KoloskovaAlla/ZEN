import {createRoot} from 'react-dom/client'
import App from './App'
import './styles/index.scss'
import ThemeProvider from './providers/ThemeProvider'
import LangProvider from './providers/LangProvider'
import ModalProvider from './providers/ModalProvider'
import SliderProvider from 'providers/SliderProvider'
import PreviewProvider from 'providers/PreviewProvider'
import {BrowserRouter} from 'react-router-dom'

const $root = document.querySelector('#root')
const root = createRoot($root)

root.render(
  <LangProvider>
    <ThemeProvider>
      <ModalProvider>
        <SliderProvider>
          <PreviewProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PreviewProvider>
        </SliderProvider>
      </ModalProvider>
    </ThemeProvider>
  </LangProvider >
)

