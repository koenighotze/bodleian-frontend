import './BookItem.css'
import PropTypes from 'prop-types'
import LabelValue from '../label-value/LabelValue'

const BookItem = ({ book }) => {
  const { id, isbn, title, authors } = book
  return (
    <div className="book-item">
      <LabelValue label="Id" value={id} />
      <LabelValue label="ISBN" value={isbn} />
      <LabelValue label="Title" value={title} />
      <LabelValue label="Authors" value={authors.join(', ')} />
    </div>
  )
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
}

export default BookItem
