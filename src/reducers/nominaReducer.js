import { types } from "../types/types";

const inicialState = {
  Data: [],
};

export const nominaReducer = (state = inicialState, action) => {
  switch (action.type) {
    case types.nominaAdd:
      return {
        ...state,
        Data: [...state.Data, action.payload],
      };
    case types.nominaRead:
      return {
        ...state,
        Data: action.payload,
      };
    case types.nominaDelete:
      return {
        ...state,
        Data: state.Data.filter(nomina => {
          return nomina.id !== action.payload;
        }),
      };
    case types.nominaClean:
      return {
        ...state,
        Data: [],
      };
    default:
      return state;
  }
};
