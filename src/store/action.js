export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const PLUS_QUANTITY = 'PLUS_QUANTITY';
export const MINUS_QUANTITY = 'MIN_QUANTITY';
export const CHECK_ITEM = 'CHECK_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export function addItem(item, quantity) {
  return { type: ADD_ITEM, item: item, quantity: quantity };
}

export function removeItem(item) {
  return { type: REMOVE_ITEM, item: item };
}

export function plusQuantity(item) {
  return { type: PLUS_QUANTITY, item: item };
}

export function minusQuantity(item) {
  return { type: MINUS_QUANTITY, item: item };
}

export function checkItem(item) {
  return { type: CHECK_ITEM, item: item };
}

export function clearCart() {
  return { type: CLEAR_CART };
}