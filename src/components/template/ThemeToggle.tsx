'use client'
import { useState } from "react"
import * as Lucide from "lucide-react"

interface ThemeToggleProps {
    onHeader?: boolean
}

const themes = {
    dark: 'dark',
    wireframe: 'wireframe',
}

export default function ThemeToggle(props : ThemeToggleProps){
    const [theme, setTheme] = useState(themes.dark)

    const toggleTheme = () => {
        const newTheme = theme === themes.dark ? themes.wireframe : themes.dark
        document.documentElement.setAttribute('data-theme', newTheme)
        setTheme(newTheme)
    }

    return(
        <button onClick={toggleTheme} className={`${!props.onHeader && "hidden"} btn btn-primary btn-outline btn-sm rounded-lg`}>
            {theme === 'dark' ? <Lucide.Moon /> : <Lucide.Sun />}
        </button>
    )
}