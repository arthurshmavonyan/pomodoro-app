import Card from "./UI/card";
import {useState, useEffect, useRef, useContext} from "react";
import classes from "./timer.module.css";
import Settings from "./settings";
import {ModalContext} from "../context/ModalContext";
import alarm from '../audio/house_alarm-clock_loud-92419.mp3'

const Timer = (props) => {

    const timers = useContext(ModalContext)
    const [countdown, setCountdown] = useState(timers.pomodoroTimer); // 25 minutes
    const [isRunning, setIsRunning] = useState(false)
    const timerId = useRef(null);
    const timerTypeIsPom = useRef(true);
    const audioRef = useRef(alarm);

    useEffect(()=>{
        audioRef.current = new Audio(alarm);
    },[])

    useEffect(() => {
        if (timerTypeIsPom.current){
            setCountdown(() => timers.pomodoroTimer)
        }
        else if (timerTypeIsPom.current === false){
            setCountdown(() => timers.breakTimer)
        }
    }, [timers.pomodoroTimer, timers.breakTimer, timerTypeIsPom.current]);

    useEffect(() => {
        if (isRunning) {
            timerId.current = setInterval(() => {
                setCountdown((prevCount) => {
                    if(prevCount > 0) {
                        return prevCount - 1;
                    }
                    else {
                        clearInterval(timerId.current);
                        audioRef.current.play();
                        timerTypeIsPom.current = !timerTypeIsPom.current;
                        setIsRunning(!isRunning)
                    }
                });
            }, 1000);
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