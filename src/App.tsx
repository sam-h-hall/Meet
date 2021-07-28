import { useEffect, useState } from "react";
import "./App.css";
import io, { Socket } from "socket.io-client";
import MessageInterface from "./Components/MessageInterface/MessageInterface";
import TitleBar from "./Components/TitleBar";
import Login from "./Components/Login";
import { Route, Switch, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./Components/Register";
import { recordMessage } from "./state-management/state-slices/message-slice";

function App() {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [messageStream, setMessageStream] = useState<any>([]);
  //const { activeUser }: any = useSelector((state: any) => state.user);

  useEffect(() => {
    let token: string | undefined =
      localStorage.getItem("authToken") || undefined;
    if (token) {
      setSocket(io("localhost:8000", { query: { token } }));
    }
  }, []);

  useEffect(() => {
    if (!socket) return;

    socket.on("connect", () => {
      console.log("connected");
      setSocketConnected(socket.connected);
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
      setSocketConnected(socket.connected);
    });
  }, [socket, messageStream]);

  useEffect(() => {
    if (socket) {
      socket.on("message", (incomingMsg) => {
        console.log(incomingMsg);
        recordMessage(incomingMsg);
        setMessageStream([...messageStream, incomingMsg]);
      });
    }
  }, [socket]);

  return (
    <div>
      <TitleBar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route exact path="/">
          <MessageInterface socket={socket} messageStream={messageStream} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
