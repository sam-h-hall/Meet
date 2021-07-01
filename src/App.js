import "./App.css";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import MessageInterface from "./Components/MessageInterface/MessageInterface";
import TitleBar from "./Components/TitleBar";
import Login from "./Components/Login";
import { PrivateRoute, Route, Switch, Link } from "react-router-dom";
import Register from "./Components/Register";

function App() {
  const [socket, setSocket] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [messageStream, setMessageStream] = useState([]);
  const token = localStorage.getItem("authToken")


  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      setSocket(io("localhost:8000/"));
    }
  }, [token]);

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
      {/*<Login /> */}
      <TitleBar />
      {/*<MessageInterface socket={socket} messageStream={messageStream} />*/}
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register" component={Register} />
        <Route exact path="/">
          <MessageInterface socket={socket} messageStream={messageStream} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
