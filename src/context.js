import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();
const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_BOOKS':
        return {
            ...state,
            book_list: action.payload,
            heading: 'Search Results'
        }
        default: 
        return state
    }
}

export class Provider extends Component {
    state = {
        book_list: [],
        heading: 'Latest Books from Finna API',
        dispatch: action => this.setState(state => reducer(state, action))
    }

    componentDidMount(){
        //https://api.finna.fi/api/v1/search?type=AllFields&field[]=id&field[]=title&field[]=primaryAuthors&field[]=publishers&field[]=year&field[]=images&field[]=ratings&sort=relevance%2Cid%20asc&page=1&limit=20&prettyPrint=false&lng=fi

        axios.get(`https://api.finna.fi/api/v1/search?type=AllFields&field[]=id&field[]=title&field[]=primaryAuthors&field[]=publishers&field[]=year&field[]=images&field[]=ratings&filter[]=format%3A0%2FBook%2F&sort=relevance%2Cid%20asc&page=1&limit=100&prettyPrint=false&lng=fi`)
        .then(res => {
            this.setState({ book_list:res.data.records})
            console.log(res.data.records)
        })
        .catch(res => console.log(res.err))
    }

    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer