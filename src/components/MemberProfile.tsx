import { UserButton, auth, currentUser } from "@clerk/nextjs";

interface MemberProfileProps {

}
export default async function MemberProfile(props : MemberProfileProps){
    const user = await currentUser()
    const {userId} =  auth()
    return(
        <section className="flex items-center gap-x-2">
            <UserButton afterSignOutUrl="/" />
            <span className="flex flex-col gap-y-px">
            <h5 className="font-bold text-sm">{user?.firstName}{user?.lastName}</h5>
            <h6 className="font-light text-xs">{user?.emailAddresses[0].emailAddress}</h6>
            </span>
        </section>
    )
}