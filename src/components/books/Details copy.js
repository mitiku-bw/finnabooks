import React, { Component } from 'react'
import axios from 'axios'

class Details extends Component {
    state = {
        book_details: {}
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
        const book_details = this.state
        console.log("Hey:",book_details)
        return (
            <div className="card mb-3">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={`https://api.finna.fi/${book_details.images}`} className="card-img" alt="Book cover" />
                    </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Details