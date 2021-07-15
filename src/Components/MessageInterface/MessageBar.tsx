import { Socket } from "socket.io-client";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

interface MessageBarProps {
  socket: Socket | undefined;
}

const MessageBar: React.FC<MessageBarProps> = ({ socket }) => {
  const dispatch = useDispatch();
  const { activeUser }: any = useSelector<any>((state) => state.user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = ({ message }: any) => {
    if (message) {
      if (!socket) return;

      socket.emit("chat message", { message, from: activeUser._id });
      reset({ message: "" });
    } else {
      return;
    }
  };

  return (
    <div className="place-self-end relative bottom-0 left-0 object-contain w-full max-w-full border-gray-200">
      <form
        id="form"
        className="flex flex-row max-w-full place-self-end space-x-4 p-2"
        onSubmit={handleSubmit(submit)}
      >
        <input
          autoFocus={true}
          contentEditable={true}
          className="flex-grow border-solid border-2 rounded-md pl-1 overflow-visible"
          id="input"
          autoComplete="off"
          {...register("message")}
          placeholder="Send message..."
        />
        <button
          className="text-red-50 bg-blue-500 w-20 rounded-md"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default MessageBar;
