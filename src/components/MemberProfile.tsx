import { UserButton, auth, currentUser } from "@clerk/nextjs";

interface MemberProfileProps {

}
export default async function MemberProfile(props : MemberProfileProps){
    const user = await currentUser()
    const {userId} =  auth()
    return(
        <section className="flex items-center gap-x-2 ring-2 ring-gray-300/50 bg-gray-400/50 p-3 rounded-2xl shadow-2xl">
            <UserButton afterSignOutUrl="/" />
            <span className="flex flex-col gap-y-px text-white">
            <h5 className="font-bold text-sm">{user?.firstName}{user?.lastName}</h5>
            <h6 className="font-light text-xs">{user?.emailAddresses[0].emailAddress}</h6>
            </span>
        </section>
    )
}