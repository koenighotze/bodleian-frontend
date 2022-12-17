import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthenticationWrapper from './components/authentication/AuthenticationWrapper'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import BooksPage from './pages/BooksPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import './App.css'

const App = () => {
  return (
    <Router>
      <>
        <Header />
        <main className="page-body">
          <div className="page-content">
            <AuthenticationWrapper>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/contact" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </AuthenticationWrapper>
          </div>
        </main>
        <Footer />
      </>
    </Router>
  )
}

export default App
