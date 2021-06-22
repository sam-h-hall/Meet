import MessageBar from "./MessageBar";
import MessageDisplay from "./MessageDisplay";

export default function MessageInterface({ socket, messageStream }) {
  console.log(messageStream);
  return (
    <div className="flex flex-col w-full h-screen max-h-full max-w-full justify-end">
      <h3 className="text-2xl">Interface</h3>
      <MessageDisplay messageStream={messageStream} />
      <MessageBar socket={socket} />
    </div>
  );
}
