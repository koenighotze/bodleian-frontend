import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'

const App = () => {
  return (
    <Router>
      <Fragment>
        <header className="App-header">Welcome to Bodleian</header>
        <NavBar />
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </Fragment>
    </Router>
  )
}

export default App
