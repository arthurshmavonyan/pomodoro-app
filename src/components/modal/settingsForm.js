import {useContext, useRef, useState} from "react";
import classes from "./settingsForm.module.css";
import {ModalContext} from "../../context/ModalContext";

const SettingsForm = (props) => {
    const timers = useContext(ModalContext)

    const [selectedOption, setSelectedOption] = useState(timers.selectedOption);
    const [number1, setNumber1] = useState(timers.pomodoroTimer / 60);
    const [number2, setNumber2] = useState(timers.breakTimer / 60);

    const pomidoroError = useRef(false);
    const breakError = useRef(false);

    if (number1 < 5 || number1 > 60) {
        pomidoroError.current = true;
    } else {
        pomidoroError.current = false;
    }

    if (number2 < 5 || number2 > 60) {
        breakError.current = true;
    } else {
        breakError.current = false;
    }

    const changeHandler1 = (event) => {
        setNumber1(event.target.value);
    }
    const changeHandler2 = (event) => {
        setNumber2(event.target.value);
    }

    const optionChangeHandler = (event) => {
        setSelectedOption(event.target.value);
        timers.setSelectedOption(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault()
        if (!pomidoroError.current && !breakError.current) {
            props.close()
            timers.setPomodoroTimer(number1 * 60);
            timers.setBreakTimer(number2 * 60);
        }
    }

    const cancelHandler = () => {
        props.close();
    }


    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.div}>
                <input className={classes.inputNumber} type='number' defaultValue='5' id='pomidoro'
                       onChange={changeHandler1} value={number1}/>
                <label className={pomidoroError.current ? classes.error : classes.label}
                       htmlFor='pomidoro'>{pomidoroError.current ?
                    <span>Pomodoro must be from 5 min to 60 min</span> : "Pomidoro"}</label>
            </div>
            <div className={classes.div}>
                <input className={classes.inputNumber} type='number' defaultValue='5' id='break'
                       onChange={changeHandler2} value={number2}/>
                <label className={breakError.current ? classes.error : classes.label}
                       htmlFor='break'>{breakError.current ?
                    <span>Break must be from 5 min to 60 min</span> : "Break"}</label>
            </div>
            <div className={classes.radio}>
                <label className={classes.label} htmlFor='dark'>Dark
                    <input
                        type='radio'
                        name='radio'
                        value='dark'
                        id='dark'
                        checked={selectedOption === 'dark'}
                        onChange={optionChangeHandler}
                    />
                </label>
                <label className={classes.label} htmlFor='light'>Light
                    <input
                        type='radio'
                        name='radio'
                        value='light'
                        id='light'
                        checked={selectedOption === 'light'}
                        onChange={optionChangeHandler}
                    />
                </label>
            </div>
            <div className={classes.row}>
                <button className={classes.button} onClick={cancelHandler}>Cancel</button>
                <button className={classes.button} onClick={submitHandler}>Ok</button>
            </div>
        </form>
    );
}

export default SettingsForm;

