import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

/**
 * createSelector(...inputSelectors | [inputSelectors], resultFunc)
 * Takes one or more selectors, or an array of selectors,
 * computes their values and passes them as arguments to resultFunc.
 *
 * createSelector determines if the value returned by an input-selector has changed between calls using reference equality (===).
 * Inputs to selectors created with createSelector should be immutable.
 *
 * Selectors created with createSelector have a cache size of 1.
 * This means they always recalculate when the value of an input-selector changes,
 * as a selector only stores the preceding value of each input-selector.
 */

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);

/**
 * About Memoization
 * Whenever a part of state tree is updated, every component using state value will re-render
 * This will also occur even when the new state value is the same as its previous value
 * When the state tree is large, this will cause performance problem
 *
 * https://www.npmjs.com/package/reselect
 * Reselect provides a function createSelector for creating memoized selectors.
 * createSelector takes an array of input-selectors and a transform function as its arguments.
 * If the Redux state tree is mutated in a way that causes the value of an input-selector to change,
 * the selector will call its transform function with the values of the input-selectors as arguments and return the result.
 * If the values of the input-selectors are the same as the previous call to the selector,
 * it will return the previously computed value instead of calling the transform function.
 *
 */
