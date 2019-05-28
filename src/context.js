import React, { Component } from 'react'
import axios from 'axios'

const Context = React.createContext();

export class Provider extends Component {
    state = {
        book_list: [],
        heading: 'Books from Finna API'
    }

    componentDidMount(){
        axios.get(`https://api.finna.fi/v1/search?lookfor=&filter[]=format:0/Book/&field[]=id&field[]=title&field[]=primaryAuthors&field[]=images&field[]=publishers&field[]=rating&field[]=year&limit=100`)
        .then(res => {
            this.setState({ book_list:res.data.records })
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