const Message = ({ msg, from }) => {
  return (
    <div className="border-t-2 border-blue-400 whitespace-pre-wrap">
      <div className="flex flex-row">
        <p className="">{from}</p>
      </div>
      <p className="whitespace-pre-wrap break-words">{msg}</p>
    </div>
  );
};

export default Message;
