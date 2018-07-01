import React, { Component } from 'react'
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {

    componentDidMount() {
        this.props.fetchData('http://5b356e716005b00014c5dc00.mockapi.io/items');
    }

    render() {
        if (this.props.hasErrored) {
            return <p>Error loading items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading...</p>;
        }
        // console.log(Array.from(this.props.items));

        return (            
            <ul>
                { Array.from(this.props.items).map( item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
});

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
