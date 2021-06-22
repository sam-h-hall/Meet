import "./App.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import MessageInterface from "./Components/MessageInterface/MessageInterface";

function App() {
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [messageStream, setMessageStream] = useState([]);

  useEffect(() => {
    setSocket(io("localhost:8000/"));
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      setSocketConnected(socket.connected);
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
      setSocketConnected(socket.connected);
    });

    socket.on("message", (incomingMsg) => {
      console.log(incomingMsg);
      setMessageStream([...messageStream, incomingMsg]);
      console.log(messageStream);
    });
  }, [socket, messageStream]);

  console.log(socketConnected);

  return (
    <div>
      <MessageInterface socket={socket} messageStream={messageStream} />
    </div>
  );
}

export default App;
