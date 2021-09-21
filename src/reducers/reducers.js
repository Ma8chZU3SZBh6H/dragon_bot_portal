import { combineReducers } from "redux";
import dashboardReducer from "./dashboardReducer";
import guildReducer from "./guildReducer";

const reducers = combineReducers({
  guild: guildReducer,
  dashboard: dashboardReducer,
});

export default reducers;
