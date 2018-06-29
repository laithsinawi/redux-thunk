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
