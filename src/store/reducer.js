import { ADD_ITEM, REMOVE_ITEM, PLUS_QUANTITY, MINUS_QUANTITY, CHECK_ITEM, CLEAR_CART } from './action';

const initialState = {
  cartItems: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      let findData = state.cartItems.find((element) => element.item.id === action.item.id)
      if (findData) {
        findData.quantity++
        return {
          cartItems: [
            ...state.cartItems,
          ],
        };
      } else {
        return {
          cartItems: [
            ...state.cartItems,
            {
              item: action.item,
              quantity: action.quantity,
              isChecked: true,
            },
          ],
        };
      }
    case REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((element) => element.item.id !== action.item.id),
      };
    case PLUS_QUANTITY:
      let plusData = state.cartItems.find((element) => element.item.id === action.item.id)
      plusData.quantity++
      return {
        cartItems: [
          ...state.cartItems,
        ],
      };
    case MINUS_QUANTITY:
      let minData = state.cartItems.find((element) => element.item.id === action.item.id)
      if (minData.quantity > 1) {
        minData.quantity--
        return {
          cartItems: [
            ...state.cartItems,
          ],
        };
      } else {
        return {
          cartItems: state.cartItems.filter((element) => element.item.id !== action.item.id),
        };
      }
    case CHECK_ITEM:
      let checkData = state.cartItems.find((element) => element.item.id === action.item.id)
      checkData.isChecked = !checkData.isChecked
      return {
        cartItems: [
          ...state.cartItems,
        ],
      };
    case CLEAR_CART:
      return {
        cartItems: [],
      };
    default:
      return state;
  }
}

export default reducer;