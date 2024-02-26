"use client";
import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import ChatForm from "./ChatForm";
import { toast } from "sonner";

interface ChatStructureProps {}
export default function ChatStructure(props: ChatStructureProps) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query: any) => generateChatResponse([...messages, query]),
    onSuccess: (data: any) => {
      if (!data) {
        toast.error("Alguma coisa deu errado...");
        return;
      }
      setMessages((prev) => [...prev, data]);

    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // setMessages((prev) => [...prev, { text, user: 'user' }])
    const query = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };
  console.log(messages)

  return (
    <main className="grid grid-cols-1 grid-rows-[1fr_auto] w-full h-full pb-4">
      <section className="">
        {/* {messages.map(({role,content}, index) => {

        })} */}
        {isPending ? <span className="loading"></span> : null}
      </section>
      <ChatForm
        onSubmit={handleSubmit}
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={isPending}
      />
    </main>
  );
}
