import { useState, useEffect } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";

const MessageDisplay = ({ messageStream }) => {
  const [messagesToDisplay, setMessagesToDisplay] = useState(false);
  const { activeUser } = useSelector((state) => state.user)

  useEffect(() => {
    if (messageStream.length > 0) {
      setMessagesToDisplay(true);
    }
  }, [messageStream]);

  return messagesToDisplay ? (
    <ShowMessages messageStream={messageStream} user={activeUser} />
  ) : (
    <p>Nothing to display</p>
  );
};

// not sure why, but this way is much faster than putting the contents in the ternary
const ShowMessages = ({ messageStream, user }) => {
  return (
    <div className="flex align-bottom overflow-auto">
      <ul className="flex flex-col w-full max-w-full">
        {messageStream.map((incomingMsg) => (
          <Message msg={incomingMsg.message} from={user.username} key={Math.random()} />
        ))}
      </ul>
    </div>
  );
};

export default MessageDisplay;
