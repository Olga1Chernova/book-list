import PropTypes from "prop-types";

import styles from "../my-books.module.scss";

const BookList = ({ removeBook, items }) => {
     const books = items.map(({id, title, author}) => <li key={id}>{title}. Author: {author}. 
         <button onClick={() => removeBook(id)} type="button">Delete</button></li>);
    
    return (
        <ol className={styles.bookList}>
            {books}
        </ol>
    )
}

export default BookList;

BookList.defaultProps = {
    items: []
}

BookList.propTypes = {
    removeBook: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
    }))
}