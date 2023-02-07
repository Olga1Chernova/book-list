import { Component } from "react";
import PropTypes from "prop-types";

import styles from "../my-books.module.scss";
import InitialState from "../initialState";

class MyBooksForm extends Component {
    state = { ...InitialState };

    handleSubmit = (e) => {
        e.preventDefault();
        const { onSubmit } = this.props;
        onSubmit({ ...this.state });
        this.reset();
    }

    reset() {
        this.setState({...InitialState})
    }

    handleChange = ({target}) => {
        const { name, value } = target;
        this.setState({
            [name]: value
        })
    }
    
    render() {
        const { handleChange, handleSubmit } = this;
        const { title, author } = this.state;
        return <form onSubmit={handleSubmit}>
                            <div className={styles.formWrapper}>
                                <label>Book title</label>
                                <input name="title" value={title} onChange={handleChange} placeholder="book title" />
                            </div>
                            <div className={styles.formWrapper}>
                                <label>Book author</label>
                                <input name="author" value={author} onChange={handleChange} placeholder="book author" />
                            </div>
                            <button type="submit">Add Book</button>
                        </form>
    }
}

export default MyBooksForm;

MyBooksForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}