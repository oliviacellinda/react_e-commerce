import { UserActionTypes } from "./user.types";

// We need to set the initial or default value of state
// because when app is executed for the first time, it doesn't know the structure and value of state that we want
const INITIAL_STATE = {
  currentUser: null,
};

// Set the default value of state if the state has not been set or undefined
// NULL !== undefined, NULL is already considered as value
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
