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
    <div className="flex align-bottom overflow-auto">
      <ul className="flex flex-col w-full max-w-full">
        {messageStream.map((incomingMsg) => (
          <Message msg={incomingMsg.message} from={incomingMsg.from} />
        ))}
      </ul>
    </div>
  ) : (
    <div>
      <p>Nothing to display</p>
    </div>
  );
};

export default MessageDisplay;
