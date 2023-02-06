import classes from "./settings.module.css";

const Settings = (props) => {
    return (
        <button className={classes.button} onClick={props.open}>Settings</button>
    )
}

export default Settings;