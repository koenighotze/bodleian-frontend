import PropTypes from 'prop-types'
import React from 'react'
import spinner from './spinner.gif'
import './spinner.css'

const Spinner = ({ isLoading, children }) => {
  return (
    <>
      {isLoading && (
        <div className="spinner-container">
          <div className="spinner">
            <img className="spinner" src={spinner} alt="Spinning..." />
            <span>Loading...</span>
          </div>
        </div>
      )}
      {!isLoading && children}
    </>
  )
}

Spinner.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
}

export default Spinner
