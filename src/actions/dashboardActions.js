import { SELECT_SERVER } from "../constants/dashboardConstants";

export function selectServer(payload) {
  return {
    type: SELECT_SERVER,
    payload,
  };
}
