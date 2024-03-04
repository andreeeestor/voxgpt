import * as Lucide from "lucide-react";

interface ChatMessageProps {
  role?: string;
  content?: string;
}
export default function ChatMessage(props: ChatMessageProps) {
  return (
    <div className="w-full isolate bg-white/10 shadow-lg ring-1 ring-black/5 relative p-5 rounded-lg">
      <p className=" text-sm pb-5 font-medium leading-6">{props.content}</p>
      <div
        className={`absolute ${
          props.role === "user"
            ? "right-0 bg-primary -translate-x-4"
            : "left-0 bg-blue-600 translate-x-4"
        } shadow-lg p-3 rounded-lg -translate-y-1`}
      >
        {props.role === "user" ? (
          <Lucide.User className="text-neutral" />
        ) : (
          <Lucide.Bot className="text-neutral" />
        )}
      </div>
    </div>
  );
}
