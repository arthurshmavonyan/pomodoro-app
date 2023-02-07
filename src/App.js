import Tasks from "./components/tasks";
import Timer from "./components/timer";
import {Fragment, useEffect} from "react";
import Modal from "./components/modal/modal";
import {useState} from "react";
import ModalContext from "./context/ModalContext";

function App() {
    const [pomodoroTimer, setPomodoroTimer] = useState(1500)
    const [breakTimer, setBreakTimer] = useState(300)
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('dark');

    const closeHandler = () => {
        setOpen(false)
    }
    const openHandler = () => {
        setOpen(true)
    }
    useEffect(() => {
        document.body.style.backgroundColor = selectedOption === 'dark' ? '3f3f3f' : '#d7d7d7';
        return () => {
            document.body.style.backgroundColor = '';
        };
    },[selectedOption])

    console.log(selectedOption)

    return (
        <ModalContext.Provider value={{
            setPomodoroTimer,
            setBreakTimer,
            pomodoroTimer,
            breakTimer,
            selectedOption,
            setSelectedOption,
        }}>
            <div style={{color: 'white', margin: '20px 0 0 20px', fontSize: '20px'}}>Pomodoro App</div>
            <Timer open={openHandler}/>
            <Tasks/>
            {open ? <Modal closeHandler={closeHandler} /> : <></>}
        </ModalContext.Provider>
    );
}

export default App;
