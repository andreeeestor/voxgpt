import { SignUp } from "@clerk/nextjs"

interface SignUpPageProps {

}
export default function SignUpPage(props : SignUpPageProps){
    return(
        <main className="min-h-screen flex items-center justify-center">
        <SignUp />
        </main>
    )
}