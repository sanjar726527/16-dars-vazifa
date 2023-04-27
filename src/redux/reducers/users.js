import users from "../../data/users";

const initialState = {
  users: users,
};

const userReducer = (state = initialState, action) => {
  let users;
  switch (action.state) {
    case "REMOVE_TASK":
      users = [...state.users];
      users.splice(action.payload, 1);
      return { ...state, users };
    default:
      return state;
  }
};
export default userReducer;
