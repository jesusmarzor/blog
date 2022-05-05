import { useEffect, useState } from "react";

export default function useTheme(){
    const [theme, setTheme] = useState(null);
    const checkTheme = () => {
        if(localStorage.theme === 'light'){
            setTheme('light');
        }else{
            setTheme('dark');
        }
    }
    useEffect( () => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        checkTheme();
    }, [])
    const changeTheme = () => {
        if (localStorage.theme === 'light') {
            localStorage.theme = 'dark';
            document.documentElement.classList.add('dark')
        } else {
            localStorage.theme = 'light';
            document.documentElement.classList.remove('dark')
        }
        checkTheme();
    }
    return {theme, changeTheme}
}