import { UserButton, auth, currentUser } from "@clerk/nextjs";
import UserInfo from "./UserInfoContainer";

export default async function MemberProfile() {
  const user = await currentUser();
  // const {userId} =  auth()
  return (
    <section className="flex items-center justify-center gap-x-2 glass-darker py-3 rounded-2xl shadow-2xl">
      <UserButton afterSignOutUrl="/" />
      <UserInfo
        name={[user?.firstName, user?.lastName]}
        email={user?.emailAddresses[0].emailAddress}
      />
    </section>
  );
}
