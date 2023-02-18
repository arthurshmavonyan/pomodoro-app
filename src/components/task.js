import Card from "./UI/card";
import classes from "./task.module.css";
import {useState} from "react";

const Task = (props) => {
    const [done, setDone] = useState(false)
    const doneHandler = () => {
        setDone(!done);
    }

    return (
        <div>
            <div className={!done ? classes.div : classes.divDone} onClick={doneHandler}>
                <li className={classes.title}>{props.title}</li>
                <button onClick={props.removeHandler} className={classes.button}>remove</button>
            </div>
        </div>
    )
}

export default Task;