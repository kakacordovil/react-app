import React from 'react';
import ProductRow from './ProductRow.js';
import ProductTableHeader from './ProductTableHeader.js';

class ProductTable extends React.Component {
    constructor (props) {
        super (props);
        this.state = {
            sort: {
                column: 'name',
                direction: 'desc'
            }
        }
    }
  render() {
    let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
    let rows = [];

    productsAsArray.forEach((product) => {
      rows.push(
        <ProductRow product={product} key={product.id} ></ProductRow>
      );
    });

    return (
      <div>
        <table>
          <thead>
            <tr>
              <ProductTableHeader column="name" ></ProductTableHeader>
              <ProductTableHeader column="price" ></ProductTableHeader>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default ProductTable;