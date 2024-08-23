
const ADD_TO_CART = 'produce/ADD_TO_CART';
const REMOVE_FROM_CART = 'produce/REMOVE_FROM_CART';

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
    default:
      return state
  }
}
