import Tasks from "./components/tasks";
import Timer from "./components/timer";
import {Fragment} from "react";
import Modal from "./components/modal/modal";
import {useState} from "react";

function App() {
    const [open, setOpen] = useState(false);

    const closeHandler = () => {
        setOpen(false)
    }
    const openHandler = () => {
        setOpen(true)
    }


    return (
        <Fragment>
            <div style={{color: 'white', margin: '20px 0 0 20px', fontSize: '20px'}}>Pomodoro App</div>
            <Timer open={openHandler}/>
            <Tasks/>
            {open ? <Modal closeHandler={closeHandler} /> : <></>}
        </Fragment>
    );
}

export default App;
