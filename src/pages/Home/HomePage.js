import  ReactDOM  from 'react-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card/Card'
import ModalSavePin from '../../containers/ModalSavePin/ModalSavePin'
import ModalCreateFolder from '../../containers/ModalCreateFolder/ModalCreateFolder';

import Notification from '../../components/Modal/Notification/Notification';

const Teste = () => {
    return ReactDOM.createPortal(
        <h4>Olá portal</h4>,
        document.body
    )
}

export const HomePage = () => {
    return (
        <div>
            <Teste />

            <Notification 
                message="Criado com sucesso"
                onClose ={ ()=>{
                    console.log("Clicou em fechar")
                }}
            />
            <ModalCreateFolder open = {true}></ModalCreateFolder>
            <ModalSavePin open={true} />
            <Container fluid>
                <Row>
                    <Col xs={12} md={3}>
                        <Card title="Matemática" image="https://picsum.photos/200/300?53" total={0} />
                    </Col>

                    <Col xs={12} md={3}>
                        <Card title="Trigonometria" image="https://picsum.photos/200/300?1" total={2} />
                    </Col>

                </Row>
            </Container>
        </div>


    )
}