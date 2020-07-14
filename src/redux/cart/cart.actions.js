import { CartActionTypes } from "./cart.types";

// payload parameter is optional
export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});
