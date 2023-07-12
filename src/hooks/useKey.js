import { useEffect } from "react"

export const useKey = (key, action) => {
    useEffect(() => {
        const fct = (e) => {
            if (e.code.toLowerCase() === key.toLowerCase()) action();
        }
        document.addEventListener('keydown', fct);

        return () => document.removeEventListener('keydown', fct);
    }, [key, action])
}