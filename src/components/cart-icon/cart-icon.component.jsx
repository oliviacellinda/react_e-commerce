import React from "react";

import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cart-icon.style.scss";
import { connect } from "react-redux";

const CartIcon = ({ itemCount, toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapStateToProps = (state) => ({
  /**
   * reduce() is native Javascript method that works similarly like a for loop
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   *
   * 0 is the initial value which will be used in the callback function
   * It means the first value of accumulatedQuantity is 0
   * The callback function then return the calculation result
   * which will be used as the next accumulatedQuantity value in the next loop
   *
   * We don't need this piece of code anymore because we replace it with memoized selector imported from cart.selectors.js
   * We also replace the previous argument of this function: { cart: { cartItems } }
   * itemCount: cartItems.reduce(
   *   (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
   *     0
   * ),
   */

  itemCount: selectCartItemsCount(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
