import data from "../../data/products";
import users from "../../data/users";
const initialState = {
  productsBasket: [],
  modal: false,
  allProducts: data,
  users: users,
};

const productReducer = (state = initialState, action) => {
  let users;
  console.log(action, state, state.allProducts);
  switch (action.type) {
    case "REMOVE_TASK":
      users = [...state.users];
      users.splice(action.payload, 1);
      return { ...state, users };
    case "EDIT_USER":
      users = [...state.users];
      users[action.payload.index] = action.payload.user;
      return { ...state, users };
    case "ADD_NEW_PRODUCT":
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
      };
    case "ADD_PRODUCT_BASKET":
      return {
        ...state,
        productsBasket: [
          ...state.productsBasket,
          { ...action.payload, qty: 1 },
        ],
      };
    case "ON_REMOVE_ALL":
      return {
        ...state,
        productsBasket: [],
        modal: action.payload,
      };
    case "ON_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    case "OFF_MODAL":
      return {
        ...state,
        modal: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
