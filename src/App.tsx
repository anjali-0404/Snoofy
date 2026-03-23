import { LandingPage } from './components/landing/LandingPage'
import { ThemeProvider } from './context/ThemeProvider'

function App() {
  return (
    <ThemeProvider>
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
