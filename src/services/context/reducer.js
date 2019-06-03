const reducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER_HISTORY':
      return {
        ...state,
        history: action.payload
      };
    case 'LOAD_PROPERTIES':
      return {
        ...state,
        properties: action.payload,
        filteredProperties: action.payload
      };
    case 'UPDATE_PROPERTY':
      const updatedProperties = state.properties.map(property => {
        if (property.id === action.payload.id) {
          return action.payload;
        }
        return property;
      });

      return {
        ...state,
        properties: updatedProperties,
        filteredProperties: updatedProperties
      };

    default:
      return state;
  }
};

export default reducer;
