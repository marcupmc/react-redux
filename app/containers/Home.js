import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { createProduct } from '../actions/products';


export class Home extends Component {

    constructor(props) {
        super(props);
        this.state = { newProductName: '' };
        this.addNewProduct = this.addNewProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ newProductName: event.target.value });
    }

    addNewProduct() {
        // Dispatch de l'action de creation du produit !
    }

    render() {
        const productName = this.state.newProductName;
        return (
            <div>
                <div>
                    <input type="text" value={productName} onChange={this.handleChange} />
                    <button onClick={this.addNewProduct}>Create new Product</button>
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    products: PropTypes.array,
};

function mapStateToProps(state) {
    const products = _.get(state, 'products');
    return {
        products,
    };
}

export default connect(mapStateToProps)(Home);
