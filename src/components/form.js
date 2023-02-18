import {useState} from "react";
import classes from "./form.module.css";
import Card from "./UI/card";

const Form = (props) => {
    const [title, setTitle] = useState('');
    const [readyToSubmit, setReadyToSubmit] = useState(true)

    const blurHandler = () => {
        console.log('blur')
        setReadyToSubmit(true)
    }

    const titleChangeHandler = (event) => {
        setTitle(() => event.target.value);
    }
    const taskSubmit = (event) => {
        event.preventDefault()
        if (title === '') {
            setReadyToSubmit(false)
            return;
        }
        props.submitHandler(title)
        setTitle('')
        setReadyToSubmit(true)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={taskSubmit} onBlur={blurHandler}>
                <input className={readyToSubmit ? classes.input : classes.inputError} type='text'
                       onChange={titleChangeHandler} value={title}/>
                {!readyToSubmit ? <p className={classes.error}>You must write something as a title</p> : <p></p>}
                <button className={classes.button} type='submit'>+ Add task</button>
            </form>
        </Card>
    )
}

export default Form;