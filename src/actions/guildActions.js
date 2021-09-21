import { UPDATE_CHANNELS, UPDATE_SERVERS } from "../constants/guildConstants";

export function updateServers(payload) {
  return {
    type: UPDATE_SERVERS,
    payload: payload,
  };
}

export function updateChannels(payload) {
  return {
    type: UPDATE_CHANNELS,
    payload: payload,
  };
}
