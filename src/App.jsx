import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthenticationWrapper from './components/authentication/AuthenticationWrapper'
import Footer from './components/footer/Footer2'
import Header from './components/header/Header2'
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
          <AuthenticationWrapper>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
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
