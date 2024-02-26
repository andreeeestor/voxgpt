import * as Lucide from "lucide-react";
import { FormEventHandler, ChangeEvent } from "react";

interface ChatFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}
export default function ChatForm(props: ChatFormProps) {
  return (
    <form onSubmit={props.onSubmit} className="relative max-w-[1440px] mx-auto">
      <input
        type="text"
        className="px-3 h-14 shadow-2xl outline-none border-none rounded-xl text-sm bg-slate-500"
        value={props.value}
        onChange={props.onChange}
      />
      <button
        className="absolute right-0 translate-y-[10px] -translate-x-3 px-3 py-2 rounded-xl bg-blue-700 cursor-pointer transition-all hover:opacity-85"
        disabled={props.disabled}
      >
        {props.disabled ? (
          <Lucide.Loader size={20} color="white" />
        ) : (
          <Lucide.Send size={20} color="white" />
        )}
      </button>
    </form>
  );
}
