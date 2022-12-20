import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthenticationWrapper from './components/authentication/AuthenticationWrapper'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import BooksPage from './pages/BooksPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import './App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <main className="page-body">
        <AuthenticationWrapper>
          <div className="page-content">
            <div className="page-content-inner">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </div>
          </div>
        </AuthenticationWrapper>
      </main>
      <Footer />
    </Router>
  )
}

export default App
