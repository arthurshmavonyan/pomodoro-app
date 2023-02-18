import {createContext, useEffect, useState} from "react";

export const ModalContext = createContext({
    setPomodoroTimer: () => undefined,
    setBreakTimer: () => undefined,
    pomodoroTimer: 1500,
    breakTimer: 300,
    selectedOption: 'dark',
    setSelectedOption: () => undefined,
});

const ModalContextProvider = (props) => {
    const [pomodoroTimer, setPomodoroTimer] = useState(1500);
    const [breakTimer, setBreakTimer] = useState(300);
    const [selectedOption, setSelectedOption] = useState('dark');

    useEffect(() => {
        document.body.style.backgroundColor = selectedOption === 'dark' ? '3f3f3f' : '#d7d7d7';
        return () => {
            document.body.style.backgroundColor = '';
        };
    }, [selectedOption])


    return (
        <ModalContext.Provider value={{
            setPomodoroTimer,
            setBreakTimer,
            pomodoroTimer,
            breakTimer,
            selectedOption,
            setSelectedOption,
        }}>
            {props.children}
        </ModalContext.Provider>
    )
};

export default ModalContextProvider;