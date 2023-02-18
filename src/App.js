import Tasks from "./components/tasks";
import Timer from "./components/timer";
import Modal from "./components/modal/modal";
import {useState} from "react";
import ModalContextProvider from "./context/ModalContext";

function App() {

    const [open, setOpen] = useState(false);

    const closeHandler = () => {
        setOpen(false)
    }
    const openHandler = () => {
        setOpen(true)
    }

    return (
        <ModalContextProvider>
            <div style={{color: 'white', margin: '20px 0 0 20px', fontSize: '20px'}}>Pomodoro App</div>
            <Timer open={openHandler}/>
            <Tasks/>
            {open ? <Modal closeHandler={closeHandler}/> : <></>}
        </ModalContextProvider>
    );
}

export default App;
