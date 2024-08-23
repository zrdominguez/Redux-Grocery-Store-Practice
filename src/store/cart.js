
const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';
const UPDATE_ITEM = 'cart/UPDATE_ITEM';

export const addToCart = produceId => (
  {
    type: ADD_TO_CART,
    produceId
  }
);

export const removeFromCart = produceId => (
  {
    type: REMOVE_FROM_CART,
    produceId
  }
);

export const updateItem = item => (
  {
    type: UPDATE_ITEM,
    item
  }
)

export const cartReducer = (state = {}, action) =>{
  switch(action.type){
    case ADD_TO_CART:
      return { ...state, [action.produceId]: {
          id: action.produceId,
          count: 1
        }
      };
    case REMOVE_FROM_CART:{
      const newState = {...state}
      delete newState[action.produceId]
      return newState
    }
    case UPDATE_ITEM:{
      const newState = {...state}
      newState[action.item.id] = action.item
      return newState
    }
    default:
      return state
  }
}
