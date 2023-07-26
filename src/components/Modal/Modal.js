
import { Children } from 'react';
import ModalBS from 'react-bootstrap/Modal';
import Button from '../Button/Button'

const Modal = (props) => {
    return (
        <ModalBS show={props.open} onHide={() => { }}>
            <ModalBS.Header closeButton>
                <ModalBS.Title>{props.title}</ModalBS.Title>
            </ModalBS.Header>
            <ModalBS.Body>{props.children}
            </ModalBS.Body>
            <ModalBS.Footer>
                {  
                    props.controls.map((control,controlIndex) => (
                        <Button 
                        key={controlIndex} 
                        {...control}
                         />                        
                    ))
                    
                }
            </ModalBS.Footer>
        </ModalBS>
    )
}

export default Modal;