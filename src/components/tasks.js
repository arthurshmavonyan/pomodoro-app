import Task from "./task";
import Card from "./UI/card";
import {Fragment, useState} from "react";
import Form from "./form";
import classes from "./tasks.module.css";

const Tasks = () => {
    const [data, setData] = useState([])

    const submitHandler = (title) => {
        setData(() => [...data, {id: Math.random(), name: title}])
        console.log(data)
    }

    const removeHandler = (id) => {
        setData(data.filter(element => element.id !== id ))
        return data;
    }

    let list = data.map(element => <Task title={element.name} removeHandler={()=>removeHandler(element.id)}></Task>)

    return (
        <Fragment>
            <Card>
                {list.length === 0 ? <p className={classes.tasks}>Add some tasks</p> : <p className={classes.tasks}>Tasks</p>}
                {list}
            </Card>
            <Form submitHandler={submitHandler}/>
        </Fragment>
    )
}

export default Tasks;