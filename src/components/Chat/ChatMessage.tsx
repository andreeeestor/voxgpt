interface ChatMessageProps {
    role?: "user" | "system";
}
export default function ChatMessage(props : ChatMessageProps){
    return(
        <div className="w-full glass relative p-5">
            <p className=""></p>
            <div className=""></div>
        </div>
    )
}