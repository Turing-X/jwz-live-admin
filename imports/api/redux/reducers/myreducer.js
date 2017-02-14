const initialState = {
  whatChanged: 'nothing'
};

export default function myReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'MY_CASE':
      return {
        ...state,
        whatChanged: action.whatChanged,
      };
    default:
      return state;
  }
}
