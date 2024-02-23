'use client'
import { useState } from "react"
import * as Lucide from "lucide-react"

interface ThemeToggleProps {

}

const themes = {
    dark: 'dark',
    cupcake: 'cupcake',
}

export default function ThemeToggle(props : ThemeToggleProps){
    const [theme, setTheme] = useState(themes.dark)

    const toggleTheme = () => {
        const newTheme = theme === themes.dark ? themes.cupcake : themes.dark
        document.documentElement.setAttribute('data-theme', newTheme)
        setTheme(newTheme)
    }

    return(
        <button onClick={toggleTheme} className="btn btn-primary btn-outline btn-sm">
            {theme === 'dark' ? <Lucide.Moon /> : <Lucide.Sun />}
        </button>
    )
}