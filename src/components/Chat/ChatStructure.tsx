"use client";
import { generateChatResponse } from "@/utils/action";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import ChatForm from "./ChatForm";
import { toast } from "sonner";
import ChatMessage from "./ChatMessage";

interface ChatStructureProps {}

interface Message {
  role: string;
  content: string;
}

export default function ChatStructure(props: ChatStructureProps) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

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
    const query = { role: "user", content: text };
    mutate(query);
    setMessages((prev) => [...prev, query]);
    setText("");
  };
  console.log(messages);

  return (
    <main className="min-h-[calc(100vh-5rem)] grid grid-rows-[1fr_auto]">
      <section className="space-y-12">
        {messages.map(({ role, content }, index) => (
          <ChatMessage role={role} content={content} key={index} />
        ))}
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
