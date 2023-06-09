import PropTypes from 'prop-types';

const Book = ({ id, title, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div>
      <div>
        <h2>{title}</h2>
        <button type="button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Book;
