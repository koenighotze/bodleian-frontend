import PropTypes from 'prop-types'
import { useRef } from 'react'
import { withTranslation } from 'react-i18next'
import { addNewBook } from '../../service/bookRepository'
import './AddBookForm.css'

const AddBookForm = ({ t, showForm }) => {
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
          <span className="label">{t('AddBookForm.isbn')}:</span>
          <input type="text" placeholder={t('AddBookForm.isbn.placeholder')} ref={isbnRef} />
        </div>
        <div className="label-value-pair">
          <span className="label">{t('AddBookForm.title')}:</span>
          <input type="text" placeholder={t('AddBookForm.title.placeholder')} ref={titleRef} />
        </div>
        <div className="label-value-pair">
          <span className="label">{t('AddBookForm.authors')}:</span>
          <input type="text" placeholder={t('AddBookForm.authors.placeholder')} ref={authorsRef} />
        </div>
        <div className="tool-bar">
          <div className="tool">
            <button type="submit" ref={addButtonRef}>
              <i className="fa-solid fa-floppy-disk"></i>
              {t('AddBookForm.addButton')}
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
              {t('AddBookForm.cancelButton')}
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

AddBookForm.propTypes = {
  showForm: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
}

export default withTranslation()(AddBookForm)
