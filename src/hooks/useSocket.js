import { useEffect, useMemo, useState } from "react";
import Cookies from "universal-cookie";
import io from "socket.io-client";
import {
  browserName,
  browserVersion,
  osName,
  osVersion,
} from "react-device-detect";

export const useSocket = (serverPath) => {
  const cookies = new Cookies();
  const session_id = cookies.get("session_id");
  const socket = useMemo(() => {
    if (session_id) {
      return io.connect(serverPath, {
        "reconnection delay": 100, // defaults to 500
        "reconnection limit": 100, // defaults to Infinity
        "max reconnection attempts": Infinity,

        query: {
          organization_id: "57b595b7-33df-4b3a-b59d-00fac9b06cac",
          session_id: session_id,
          browser_name: browserName,
          browser_version: browserVersion,
          os_name: osName,
          os_version: osVersion,
        },
      });
    } else {
      return null;
    }
  }, [serverPath, session_id]);
  const [socketIsOnline, setSocketIsOnline] = useState(false);
  const [socketIsEnabled, setSocketIsEnabled] = useState(false);
  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      setSocketIsOnline(true);
    });
  }, [socket, session_id]);

  useEffect(() => {
    if (!socket) return;
    socket.on("disconnect", () => {
      //logica para reconectar con el websocket
      let interval;

      interval = window.setInterval(() => {
        if (socket) {
          console.log("socket conectado!!!!");

          // socket.emit(`client:conversations-by-user`, {
          //   user_id: userId,
          // });

          clearInterval(interval);
          return;
        }
        socket.connect();
      }, 5000);

      //socket.socket.connect();
      //socket.removeAllListeners();
    });
  }, [socket]);

  //otro evento de posible desconexion!!
  useEffect(() => {
    if (!socket) return;
    socket.on("connect_error", () => {
      //logica para reconectar con el websocket
      let interval;

      interval = window.setInterval(() => {
        if (socket) {
          console.log("socket conectado!!!!");

          // socket.emit(`client:conversations-by-user`, {
          //   user_id: userId,
          // });

          clearInterval(interval);
          return;
        }
        socket.connect();
      }, 5000);

      //socket.socket.connect();
      //socket.removeAllListeners();
    });
  }, [socket]);

  useEffect(() => {
    if (!socket) return;
    if (session_id === undefined) {
      socket.removeAllListeners();
    }
  }, [session_id, socket]);

  const updateSocketIsEnabled = (status) => {
    setSocketIsEnabled(status);
  };

  return {
    socket,
    socketIsEnabled,
    updateSocketIsEnabled,
    socketIsOnline,
  };
};
