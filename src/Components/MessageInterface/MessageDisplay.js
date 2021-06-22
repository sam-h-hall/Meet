import { useState, useEffect } from "react";
import Message from "./Message";

const MessageDisplay = ({ messageStream }) => {
  const [messagesToDisplay, setMessagesToDisplay] = useState(false);

  useEffect(() => {
    if (messageStream.length > 0) {
      setMessagesToDisplay(true);
    }
  }, [messageStream]);

  return messagesToDisplay ? (
    <ShowMessages messageStream={messageStream} />
  ) : (
    <p>Nothing to display</p>
  );
};

// not sure why, but this way is much faster than putting the contents in the ternary
const ShowMessages = ({ messageStream }) => {
  return (
    <div className="flex align-bottom overflow-auto">
      <ul className="flex flex-col w-full max-w-full">
        {messageStream.map((incomingMsg) => (
          <Message msg={incomingMsg.message} from={incomingMsg.from} />
        ))}
      </ul>
    </div>
  );
};

export default MessageDisplay;
