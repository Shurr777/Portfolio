import React, {useEffect} from 'react';
import './darkModeButton.css'
import sun from "../../../img/icons/Sun.svg";
import moon from "../../../img/icons/Moon.svg";
import {useLocalStorage} from "../hooks/useLocalStorage";
import detectDarkMode from "../detectDarkMode";


const DarkModeButton = () => {
    /*const BtnRef = useRef(null)*/
    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode())

    useEffect(() =>{
        if(darkMode === 'dark'){
            document.body.classList.add('dark')
            /*BtnRef.current.classList.add('dark-mode-btn__active')*/
        }else {
            document.body.classList.remove('dark')
            /*BtnRef.current.classList.remove('dark-mode-btn__active')*/
        }
    },[darkMode])

    useEffect(() =>{
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', (event) =>{
            const newColorScheme = event.matches ? "dark" : "light"
            setDarkMode(newColorScheme)
        })
    }, [setDarkMode])

    const toggleDarkMode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light'
        })
    }

    const btnNorm = 'dark-mode-btn';
    const btnActive = 'dark-mode-btn dark-mode-btn__active';

    return (
            <button
                /*ref={BtnRef}*/
                className={darkMode === 'dark' ? btnActive : btnNorm}
                onClick={toggleDarkMode}
            >
                <img src={sun} alt="Light mode" className="dark-mode-btn__icon"/>
                <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"/>
            </button>

    );
};

export default DarkModeButton;