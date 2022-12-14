import PropTypes from 'prop-types'

const BookItem = ({ book }) => {
  const { id, isbn, title, authors } = book
  return (
    <div className="book-item">
      <div className="label-value-pair">
        <label htmlFor="id">
          <span>Id:</span>
          <input readOnly type="text" name="id" id="id" value={id} />
        </label>
      </div>
      <div className="label-value-pair">
        <label htmlFor="isbn">
          <span>ISBN:</span>
          <input readOnly type="text" name="isbn" id="isbn" value={isbn} />
        </label>
      </div>
      <div className="label-value-pair">
        <label htmlFor="title">
          <span>Title:</span>
          <input readOnly type="text" name="title" id="title" value={title} />
        </label>
      </div>
      <div className="label-value-pair">
        <label htmlFor="authors">
          <span>Authors:</span>
          <input readOnly type="text" name="authors" id="authors" value={authors} />
        </label>
      </div>
    </div>
  )
}

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
}

export default BookItem
