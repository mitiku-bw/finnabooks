import React, { Component } from 'react'
import axios from 'axios'
import { Consumer } from '../../context'

class Search extends Component {
    state = {
        quickSearch: ''
    }
    
    render() {    
        return (
        <div>
            <Consumer>
                {
                    value=>{
                        return(
                            <div className="card card-body mb-4 p-4">
                                <h1 className="display-4 text-center">
                                    <i className="fas fa-search">Quick Search</i>
                                </h1>
                                <p className="lead text-center"></p>
                            </div>
                        )
                    }
                } 
            </Consumer>
        </div>
        )
    }
}

export default Search