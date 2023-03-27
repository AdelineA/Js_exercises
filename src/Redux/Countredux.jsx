export const addNumber = () => {
  return {
    type: "ADD_NUMBER",
  };
};

export const subNumber = () => {
  return {
    type: "SUB_NUMBER",
  };
};

const initialState = {
  counter: 20,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUMBER":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "SUB_NUMBER":
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
};
export default myReducer;
