import SettingsForm from "./settingsForm";
import classes from "./modal.module.css";

const Modal = (props) => {

    return (
        <div className={classes.modal} onClick={props.closeHandler}>
            <div className={classes.modal__container} onClick={e => e.stopPropagation()}>
                <SettingsForm pomodoro={props.pomodoro} break={props.break} close={props.closeHandler}/>
            </div>
        </div>
    );
};

export default Modal;