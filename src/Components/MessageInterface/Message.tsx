interface MessageProps {
  incomingMsg: { from_id: string; message: string };
}

const Message: React.FC<MessageProps> = ({ incomingMsg }) => {
  return (
    <div>
      <div>
        <p>{incomingMsg.from_id}</p>
      </div>
      <p>{incomingMsg.message}</p>
    </div>
  );
};

export default Message;
