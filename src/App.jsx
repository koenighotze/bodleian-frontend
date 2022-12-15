import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthenticationWrapper from './components/authentication/AuthenticationWrapper'
import Footer from './components/footer/footer'
import Header from './components/header/header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="page-body">
          <AuthenticationWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </AuthenticationWrapper>
        </main>
        <Footer />
      </>
    </Router>
  )
}

export default App
