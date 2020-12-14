export function Cars(state={}, action) {
  switch (action.type) {
    case 'CARS_LIST': {
      return { ...state, list: action.payload };
    }
    case 'CAR_DETAILS': {
      return { ...state, details: action.payload };
    }
    case 'CLEAR_DETAILS': {
      return { ...state, details: action.payload };
    }
    default:
      return state;
  }
}
