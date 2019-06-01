import React from 'react'
import {Link} from 'react-router-dom'

const Book = (props) => {
    const { book } = props
    const preimage_url = 'https://api.finna.fi'
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm">
                <img src={preimage_url+book.images} className="card-img-top" alt={book.title} />
                <div className="card-body">
                    <h5 className="card-title">{book.primaryAuthors}</h5>
                    <strong className="card-text">{book.title}</strong>
                    <p className="card-text">{book.year}</p>
                    <Link to={`books/book/${book.id}`} className="card-link">
                        <i className="fas fa-chevron-right">Details</i>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Book