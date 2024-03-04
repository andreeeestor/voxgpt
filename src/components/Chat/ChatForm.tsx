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
    <form onSubmit={props.onSubmit} className="relative">
      <input
        type="text"
        className="max-h-25 py-[10px] pr-10 md:py-3.5 md:pr-12 placeholder-slate-600 pl-3 md:pl-4 focus:ring-2 ring-1 ring-slate-600 outline-none rounded-xl text-sm w-full bg-transparent shadow-md"
        placeholder="Digite uma mensagem..."
        value={props.value}
        onChange={props.onChange}
      />
      <button
        className="absolute bottom-1.5 right-2 rounded-lg bg-primary p-2 transition-all hover:opacity-85"
        disabled={props.disabled}
      >
        {props.disabled ? (
          <Lucide.Loader size={20} color="black" />
        ) : (
          <Lucide.ArrowUp size={20} color="black" />
        )}
      </button>
    </form>
  );
}
