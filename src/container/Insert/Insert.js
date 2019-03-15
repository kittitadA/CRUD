import React, { Component } from 'react';

import classes from './Insert.css';
import Content from '../Content/Content';
import Add from '../Add/Add';

const products = [
  {
    id: '1sa3d12',
    name: 'Title1',
    price: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, '
  },
  {
    id: 'as12d3a13',
    name: 'Title2',
    price: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, '
  }
];

localStorage.setItem('products', JSON.stringify(products));

class Insert extends Component {

  state = {
    products: JSON.parse(localStorage.getItem('products'))
  }

    componentWillMount() {
        const products = this.getProducts();
        this.setState({ products });
    }

    getProducts = () => {
      return this.state.products
    };

    onDelete = (id) => {
      const products = this.getProducts();

      const filteredProducts = products.filter((product) => {
          return product.id !== id;
      });

      this.setState({ products: filteredProducts});
    }

    onAdd = (name, price) => {
        const products = this.getProducts();
        let d = new Date();
        let id = d.getTime();
        products.push({ name, price, id});
        this.setState({ products });
    }

    onEditSubmit = (name, price, id) => {
        let products = this.getProducts();

        products = products.map(product => {
            if (product.id === id) {
                product.name = name;
                product.price = price;
            }
            return product;
        });

        this.setState({ products: products });
    }


    render() {

        const textContent = this.state.products.map((product, index) => {
            return (
                <Content
                    key={index}
                    id={product.id}
                    productName={product.name}
                    productPrice={product.price}
                    onDelete={this.onDelete}
                    onEditSubmit={this.onEditSubmit}
                />
            );
          });

        return (

              <div className={classes.App}>
                  <h3 className="row justify-content-center pt-5 text-dark">CRUD</h3>

                  <Add onAdd={this.onAdd}/>
                  { textContent }

              </div>
        );
    }
}

export default Insert;
