import users from "../../data/users";

const initialState = {
  users: users,
};

const userReducer = (state = initialState, action) => {
  console.log(state.users);
  let users;
  switch (action.state) {
    case "EDIT_POSITION":
      users = [...state.users];
      users[action.payload.index].position = action.payload.name;
      return { ...state, users };
    case "REMOVE_TASK":
      users = [...state.users];
      users.splice(action.payload, 1);
      return { ...state, users };
    default:
      return state;
  }
};
export default userReducer;
