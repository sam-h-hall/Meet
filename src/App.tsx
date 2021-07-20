import { useEffect, useState } from "react";
import "./App.css";
import io, { Socket } from "socket.io-client";
import MessageInterface from "./Components/MessageInterface/MessageInterface";
import TitleBar from "./Components/TitleBar";
import Login from "./Components/Login";
import { Route, Switch, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./Components/Register";

function App() {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const [socketConnected, setSocketConnected] = useState<boolean>(false);
  const [messageStream, setMessageStream] = useState<any>([]);
  const { activeUser }: any = useSelector((state: any) => state.user);

  useEffect(() => {
    if (activeUser) {
      console.log("active user: ", activeUser); // replace this with some error and redirect -- don't want to risk this happening
      let token: string = localStorage.getItem("authToken") || "";

      setSocket(io("localhost:8000", { query: { token } }));
    }
  }, [activeUser]);

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
        setMessageStream([...messageStream, incomingMsg]);
        console.log(messageStream);
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
