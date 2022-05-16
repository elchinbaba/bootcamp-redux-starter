import React, { PureComponent } from "react";

import { connect } from "react-redux";

import "../styles.css";

import CartItem from './CartItem';

import store from '../redux/store';

class Cart extends PureComponent {
  getTotal() {
    const { cartGoods } = this.props.cartGoods.cart;
    if (cartGoods) return cartGoods.reduce((acc, item) => acc + item.price, 0);
    return 0;
  }

  // componentDidMount() {
  //   store.subscribe(() => {
  //     const state = store.getState();
  //     this.setState({ cartGoods: state.cart });
  //   });
  // }

  render() {
    return (
      <div className="cart">
        <h2 className="cart__title" >Shopping Cart</h2>
        { this.props.cartGoods.cart.length ?
          <ul className="cart__list">
            {this.props.cartGoods.cart.map((item, index) => (
              <li className="cart__list-item" key={index}>
                <CartItem {...item} />
              </li>
            ))}
          </ul>
        :
          <p className="cart__note">Nothing in the cart now</p>
        }

        <p className="cart__total">Total: {this.getTotal()}.00$</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartGoods: state
  }
};

export default connect(mapStateToProps)(Cart);