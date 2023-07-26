import Alert from 'react-bootstrap/Alert' ;
import ReactDOM from 'react-dom'
import './index.css'

const Notification = ({variant,message,onClose}) => {
    return ReactDOM.createPortal(
        <div className='notification'>
            <Alert variant={variant} onClose={onClose} dismissible>
                {message}
            </Alert>
        </div>,
        document.body
    )
}

export default Notification;