
const ADD_TO_CART = 'produce/ADD_TO_CART';

export const addToCart = produceId => (
  {
    type: ADD_TO_CART,
    produceId
  }
)

export const cartReducer = (state = {}, action) =>{
  switch(action.type){
    case ADD_TO_CART:
      return { ...state, [action.produceId]: {
          id: action.produceId,
          count: 1
        }
      }
    default:
      return state
  }
}
