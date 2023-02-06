import Card from "./UI/card";
import {useState, useEffect, useRef} from "react";
import classes from "./timer.module.css";
import Settings from "./settings";

const Timer = (props) => {
    const [countdown, setCountdown] = useState(1500); // 25 minutes
    const [isRunning, setIsRunning] = useState(false)
    const timerId = useRef(null);

    useEffect(() => {
        if (isRunning) {
            timerId.current = setInterval(() => {
                setCountdown((prevCount) => prevCount - 1);
            }, 1000);

            if (countdown === 0) {
                clearInterval(timerId.current);
                timerId.current = null;
                alert("Time's up!");
            }
        } else {
            clearInterval(timerId.current);
            timerId.current = null;
        }
    }, [isRunning])

    let minutes = Math.floor(countdown / 60);
    let seconds = countdown % 60;

    const runningHandler = () => {
        setIsRunning(!isRunning);
    }

    return (
        <Card>
            <Settings open={props.open}/>
            <div className={classes.timer}>{minutes}:{seconds}</div>
            <div className={classes.buttons}>
                <button className={isRunning ? classes.stop : classes.start} onClick={runningHandler}>{isRunning ? <span>Stop</span> : <span>Start</span>}</button>

            </div>
        </Card>
    )
}

export default Timer;