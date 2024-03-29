import ChatStructure from "@/components/Chat/ChatStructure";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query"

export default function ChatPage(){
    const queryClient = new QueryClient()
    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ChatStructure />
        </HydrationBoundary>
    )
}