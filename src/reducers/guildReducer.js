import {
  UPDATE_CHANNELS,
  UPDATE_SERVERS,
} from "../constants/guildConstants.js";

const defaultState = {
  servers: [],
  channels: [],
};

function guildReducer(state = defaultState, action) {
  switch (action.type) {
    case UPDATE_SERVERS:
      return { ...state, servers: action.payload };
    case UPDATE_CHANNELS:
      return { ...state, channels: action.payload };
    default:
      return state;
  }
}

export default guildReducer;
