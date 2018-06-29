import React, { Component } from 'react'
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            hasErrored: false,
            isLoading: false
        }
    }

    componentDidMount() {
        this.props.fetchData('http://5b356e716005b00014c5dc00.mockapi.io/items');
    }

    renderItems() {
        return(
            <div>
                {console.log('typeof', typeof(this.props.items))}
            </div>
        );
    };

    render() {
        if (this.props.hasErrored) {
            return <p>Error loading items</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <ul>
                {this.renderItems()}
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
