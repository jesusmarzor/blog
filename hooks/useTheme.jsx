import { useEffect, useState } from "react";

export default function useTheme(){
    const [theme, setTheme] = useState(null);
    const checkTheme = (newTheme) => {
        if(newTheme === 'dark'){
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark';
            setTheme('dark');
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light';
            setTheme('light');
        }
    }
    useEffect( () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            checkTheme('dark');
        } else {
            document.documentElement.classList.remove('dark')
            checkTheme('light');
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