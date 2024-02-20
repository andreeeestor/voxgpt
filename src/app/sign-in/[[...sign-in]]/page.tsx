import { SignIn } from "@clerk/nextjs";

interface SignInPageProps {

}
export default function SignInPage(props : SignInPageProps){
    return(
        <main className="min-h-screen flex items-center justify-center">
        <SignIn/>
        </main>
    )
}