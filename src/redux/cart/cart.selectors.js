import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => 
    cartItems.reduce(
      (accumulatedQuantify, cartItem) =>
        accumulatedQuantify + cartItem.quantify
    )
)

export const selectCartTotal = createSelector (
  [selectCartItemsCount],
  cartItems =>
    cartItems.reduce(
      (accumulatedQuantify, cartItem) => accumulatedQuantify + cartItem.quantify * cartItem.price,
      0
    )
);