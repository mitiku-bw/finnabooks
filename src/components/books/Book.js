import React from 'react'
import {Link} from 'react-router-dom'

const Book = (props) => {
    const { book } = props
    const preimage_url = 'https://api.finna.fi'
    return (
        <div className="card-deck col-md-3">
            <div className="card mb-4 shadow-sm">
                <Link to={`details/book/${book.id}`} className="card-link">
                    <img src={preimage_url+book.images} className="card-img-top" alt={book.title} />
                    </Link> <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>  
                        <p className="card-text">{book.year}</p>                  
                    </div>
                
            </div>
        </div>
    )
}

export default Book