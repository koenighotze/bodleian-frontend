import './BookItem.css'
import PropTypes from 'prop-types'
import { withTranslation } from 'react-i18next'
import LabelValue from '../label-value/LabelValue'

const BookItem = ({ t, book }) => {
  const { id, isbn, title, authors } = book
  return (
    <div className="book-item">
      <LabelValue label={t('BookItem.id')} value={id} />
      <LabelValue label={t('BookItem.isbn')} value={isbn} />
      <LabelValue label={t('BookItem.title')} value={title} />
      <LabelValue label={t('BookItem.authors')} value={authors.join(', ')} />
      <div className="actions">
        <button className="action">
          <i className="fa-solid fa-square-minus"></i>
          {}
          {t('BookItem.remove-book')}
        </button>
        <button className="action">
          <i className="fa-solid fa-pen-to-square"></i>
          {}
          {t('BookItem.edit-book')}
        </button>
      </div>
    </div>
  )
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  t: PropTypes.func.isRequired,
}

export default withTranslation()(BookItem)
