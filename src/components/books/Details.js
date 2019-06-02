import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Spinner from '../layout/Spinner'
import axios from 'axios'

class Details extends Component {
    state = {
        book_details: [],
        heading: "Book Details"
    }
    componentDidMount(){
        axios.get(`https://api.finna.fi/api/v1/record?id=${this.props.match.params.id}&field[]=isbns&field[]=title&field[]=primaryAuthors&field[]=publishers&field[]=year&field[]=images&field[]=rating&prettyPrint=false&lng=fi`)
        .then(res => {
            this.setState({ book_details:res.data.records[0]})
            console.log(res.data.records[0])
        })
        .catch(res => console.log(res.err))
    }

    render() {
        const book = this.state.book_details
        const preimage_url = 'https://api.finna.fi' 

        if(book === undefined || book.length === 0 || book == null){
            return <Spinner />
        }else{
            console.log("Book Details:", book)
            return (
                <React.Fragment>
                    <Link to="/" className="btn btn-primary btn-sm mb4">
                        Go back
                    </Link>
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <div className="col-md-4">
                                <img src={preimage_url+book.images} className="card-img" alt="Book cover" />
                            </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{book.title}</h5>
                                <p className="card-text"><strong>Authors: </strong>{book.primaryAuthors}</p>
                                <p className="card-text"><strong>Publishers: </strong>{book.publishers}</p>
                                <p className="card-text"><strong>Year: </strong>{book.year}</p>
                                <p className="card-text"><strong>ISBN: </strong>{book.isbns}</p>
                                <p className="card-text">
                                    <span>Rating: {book.rating.average} </span>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="fas fa-star" aria-hidden="true"></i>
                                    <i className="far fa-star" aria-hidden="true"></i>
                                    <i className="far fa-star" aria-hidden="true"></i>
                                    <i className="far fa-star" aria-hidden="true"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
        }
    }
}

export default Details