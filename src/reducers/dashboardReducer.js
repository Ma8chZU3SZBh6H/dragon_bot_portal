import { SELECT_SERVER } from "../constants/dashboardConstants";

const defaultState = {
  selectedServer: null,
};

function dashboardReducer(state = defaultState, action) {
  switch (action.type) {
    case SELECT_SERVER:
      return { ...state, selectedServer: action.payload };

    default:
      return state;
  }
}

export default dashboardReducer;
