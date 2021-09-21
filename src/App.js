import { useEffect } from "react";
import { io } from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
import * as guildActions from "./actions/guildActions";
import * as dashboardActions from "./actions/dashboardActions";

const socket = io("localhost:7000");

function App() {
  const dispatch = useDispatch();
  const guild = useSelector((state) => state.guild);
  const dashboard = useSelector((state) => state.dashboard);
  useEffect(() => {
    socket.on("setServers", (servers) => {
      dispatch(guildActions.updateServers(servers));
    });
    socket.on("setChannels", (channels) => {
      dispatch(guildActions.updateChannels(channels));
    });
  }, []);
  useEffect(() => {
    if (dashboard.selectedServer == null && guild.servers[0] != null) {
      dispatch(dashboardActions.selectServer(guild.servers[0]));
    }
  }, [guild.servers]);
  useEffect(() => {
    if (dashboard.selectedServer != null) {
      socket.emit("getChannels", dashboard.selectedServer.id);
    }
  }, [dashboard.selectedServer]);

  return (
    <div>
      <select
        onChange={(e) =>
          dispatch(
            dashboardActions.selectServer(
              guild.servers.find((server) => server.name == e.target.value)
            )
          )
        }
      >
        {guild.servers?.map((value, index) => (
          <option value={value.name} key={index}>
            {value.name}
          </option>
        ))}
      </select>
      <h1>{dashboard.selectedServer?.name ?? "Loading..."}</h1>
      {guild.channels.map((channel, index) => (
        <h4 key={index}>{channel.name}</h4>
      ))}
    </div>
  );
}

export default App;
