import React, { Component } from 'react'

export default class ItemList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            hasErrored: false,
            isLoading: false
        }
    }

    componentDidMount(){
        this.fetchData('http://5b356e716005b00014c5dc00.mockapi.io/items')
    }

    fetchData(url) {
        this.setState({
            isLoading: true
        });

        fetch(url)
        .then( response => {
            if(!response.ok){
                throw Error(response.statusText)
            }

            this.setState({
                isLoading: false
            });

            return response;
        })
        .then( response => response.json())
        .then((items) => {
            this.setState({ items })
        })
    }

    render() {
        if (this.state.hasErrored) {
            return <p>Error loading items</p>;
        }
        if (this.state.isLoading) {
            return <p>Loading...</p>;
        }
        return (
            <ul>
                {this.state.items.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <img src={item.avatar} />
                    </li>
                ))}
            </ul>
        )
    }
}
