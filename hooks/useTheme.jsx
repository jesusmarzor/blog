import { useEffect, useState } from "react";

export default function useTheme(){
    const [theme, setTheme] = useState(null);
    const checkTheme = (newTheme) => {
        (newTheme === 'dark')
        ?
            document.documentElement.classList.add('dark')
        :
            document.documentElement.classList.remove('dark')
        localStorage.theme = newTheme;
        setTheme(newTheme);
    }
    useEffect( () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            checkTheme('dark');
        } else {
            checkTheme('light')
        }
    }, [])
    const changeTheme = () => {
        if (localStorage.theme === 'dark') {
            checkTheme('light');
        } else {
            checkTheme('dark');
        }
    }
    return {theme, changeTheme}
}