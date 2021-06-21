//import './App.css';
import { useEffect, useState } from "react";
import io from "socket.io-client";

function App() {
  const [socket, setSocket] = useState(null);
  const [socketConnected, socketSocketConnected] = useState(false);
  const [messageStream, setMessageStream] = useState([]);

  useEffect(() => {
    setSocket(io("localhost:8000/"));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      socketSocketConnected(socket.connected);
    });

    socket.on("disconnect", () => {
      socketSocketConnected(socket.connected);
    });

    socket.on("message", (incomingMsg) => {
      setMessageStream([...messageStream, incomingMsg]);
    });
  }, [socket, messageStream]);

  return <div></div>;
}

export default App;
