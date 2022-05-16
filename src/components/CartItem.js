import React, { PureComponent } from "react";

import { connect } from "react-redux";

import "../styles.css";

import store from "../redux/store";

import { remove } from "../redux/actions";

class CartItem extends PureComponent {
  render() {
    const { title, price, id } = this.props;
    return (
      <div className="cart-item">
        <p className="cart-item__title">{title}</p>
        <p className="cart-item__price">{price}.00$</p>
        <button onClick={() => this.props.remove(id)}>x</button>
      </div>
    );
  }
}

const mapDispatchToProps = (_) => ({
  remove: (id) => store.dispatch(remove(id))
});

export default connect(mapDispatchToProps)(CartItem);