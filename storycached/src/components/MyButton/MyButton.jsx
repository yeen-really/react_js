import classNames from 'classnames'
import styles from './MyButton.module.css'

export const MyButton = ({isDisabled, type = 'primary', text = 'Text'}) => {
    const className = classNames(styles['input-style'], {[styles['checked']]: type === 'checked', [styles['error']]: type === 'error', [styles['disabled']]: isDisabled})
    return (<>
    <label>{text}</label>
    <input className={className} disabled={isDisabled}></input>
    </>)
    // <button className={className} disabled={isDisabled}>{text}</button>

}