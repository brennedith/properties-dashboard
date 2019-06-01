const reducer = (state, action) => {
  switch (action.type) {
    case 'LOAD_PROPERTIES':
      return {
        ...state,
        properties: action.payload,
        filteredProperties: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
