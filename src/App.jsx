import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AuthenticationWrapper from './components/authentication/AuthenticationWrapper'
import Header from './components/header/header'
import NavBar from './components/navbar/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
      <Fragment>
        <Header />
        <main className="page-body">
          <AuthenticationWrapper>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </AuthenticationWrapper>
        </main>
        <footer className="page-footer">
          <span>Koenighotze</span>
          <span>Bodleian - Digital Library</span>
          <span>2022</span>
        </footer>
      </Fragment>
    </Router>
  )
}

export default App
