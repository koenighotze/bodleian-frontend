import PropTypes from 'prop-types'
import { useRef } from 'react'
import { addNewBook } from '../../service/bookRepository'
import './AddBookForm.css'

const AddBookForm = ({ showForm }) => {
  const isbnRef = useRef()
  const titleRef = useRef()
  const authorsRef = useRef()
  const addButtonRef = useRef()
  const cancelButtonRef = useRef()

  const addBook = (e) => {
    e.preventDefault()
    addButtonRef.current.disabled = true
    cancelButtonRef.current.disabled = true
    addButtonRef.current.value = '...adding'

    const newBook = {
      isbn: isbnRef.current.value,
      title: titleRef.current.value,
      authors: authorsRef.current.value.split(/, /),
    }
    const add = async () => {
      await addNewBook(newBook)
      showForm(false)
    }
    add()
  }

  return (
    <div className="add-book-form">
      <form onSubmit={addBook}>
        <div className="label-value-pair">
          <span className="label">ISBN:</span>
          <input type="text" placeholder="1234567890" ref={isbnRef} />
        </div>
        <div className="label-value-pair">
          <span className="label">Title:</span>
          <input type="text" placeholder="A great booktitle" ref={titleRef} />
        </div>
        <div className="label-value-pair">
          <span className="label">Authors:</span>
          <input type="text" placeholder="M. Author, P. Otherauthor" ref={authorsRef} />
        </div>
        <div className="tool-bar">
          <div className="tool">
            <button type="submit" ref={addButtonRef}>
              <i className="fa-solid fa-floppy-disk"></i>
              Add book to collection
            </button>
          </div>
          <div className="tool">
            <button
              className="discard"
              type="submit"
              ref={cancelButtonRef}
              onClick={() => showForm(false)}
            >
              <i className="fa-solid fa-trash"></i>
              Discard changes
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

AddBookForm.propTypes = {
  showForm: PropTypes.func.isRequired,
}

export default AddBookForm
