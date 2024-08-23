import produceData from '../mockData/produce.json'

const POPULATE = 'produce/POPULATE';

export const populateProduce = () => (
  {
    type: POPULATE,
    produce: produceData
  }
)

export const produceReducer = (state = {}, action) =>{
  switch (action.type){
    case(POPULATE):{
      const newState = {};
      action.produce.forEach(produce => {
        newState[produce.id] = produce;
      })
      return newState;
    }
    default:
      return state;
  }
}
