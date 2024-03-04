import ToursPage from "@/components/tours/ToursPage";
import { getAllTours } from "@/utils/action";
import { QueryClient, dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function AllToursPage(){
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['tours'],
        // queryFn: () => getAllTours(),
    })
    return(
        <HydrationBoundary state={dehydrate(queryClient)}>
            <ToursPage />
        </HydrationBoundary>
    )
}