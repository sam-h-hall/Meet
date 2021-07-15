interface MessageProps {
  incomingMsg: { from: string; message: string };
}

const Message: React.FC<MessageProps> = ({ incomingMsg }) => {
  return (
    <div>
      <div>
        <p>{incomingMsg.from}</p>
      </div>
      <p>{incomingMsg.message}</p>
    </div>
  );
};

export default Message;
