import { ReactNode } from "react"

interface DashboardLayoutProps {
    children: ReactNode
}
export default function DashboardLayout(props : DashboardLayoutProps){
    return(
        <>
            {props.children}
        </>
    )
}