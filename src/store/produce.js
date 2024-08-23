import produceData from '../mockData/produce.json';
import { createSelector } from 'reselect'

const POPULATE = 'produce/POPULATE';
const TOGGLE_LIKED = 'produce/TOGGLE_LIKED';

export const populateProduce = () => (
  {
    type: POPULATE,
    produce: produceData
  }
)

export const toggleLiked = (produce) => (
  {
    type: TOGGLE_LIKED,
    produce
  }
)

export const selectProduce = (state) => state.produce;

export const selectProduceArray = createSelector(selectProduce, (produce) => Object.values(produce));

export const produceReducer = (state = {}, action) =>{
  switch (action.type){
    case POPULATE:{
      const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      })
      return newState;
    }
    case TOGGLE_LIKED:{
      const { produce } = action;
      const newState = {...state}
      produce.liked = produce.liked ? false : true;
      newState[produce.id] = {...produce}
      return newState;
    }
    default:
      return state;
  }
}
