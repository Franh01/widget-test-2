import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";
export const SocketContext = createContext();
let url = import.meta.env.VITE_SOCKET_URL;

const SocketProvider = ({ children, userId }) => {
  const { socket, socketIsEnabled, updateSocketIsEnabled, socketIsOnline } =
    useSocket(url, userId);
  return (
    <SocketContext.Provider
      value={{ socket, socketIsEnabled, updateSocketIsEnabled, socketIsOnline }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export default SocketProvider;
