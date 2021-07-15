import { Socket } from "socket.io-client";
import MessageDisplay from "./MessageDisplay";
import MessageBar from "./MessageBar";

interface MessageInterfaceProps {
  socket: Socket | undefined;
  messageStream: any;
}

const MessageInterface: React.FC<MessageInterfaceProps> = ({
  socket,
  messageStream,
}) => {
  return (
    <div className="flex flex-col w-full h-screen max-h-full max-w-full justify-end">
      <h3 className="text-2xl">Interface</h3>
      <MessageDisplay messageStream={messageStream} />
      <MessageBar socket={socket} />
    </div>
  );
};

export default MessageInterface;
