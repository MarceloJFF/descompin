import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button"
import { ListGroup } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/*containers são componentes que têm regras de negócio*/
const ModalSavePin = (props) => {
    return (
        <Modal
            title="Salvar pin"
            open={props.open}

            controls={[
                {
                    label: 'Criar pasta',
                    variant: 'secondary',
                    onClick: () => {
                        console.log("Clicou em criar pasta")
                    },
                    loading: false,
                    loadingLabel: "Criando...",
                    disabled: false
                }
            ]

            }>
            <ListGroup>
                <ListGroup.Item>
                    <Row>
                        <Col xs="8" >1 of 1</Col>
                        <Col  className="text-end" xs="4">
                            <Button label="Salvar" loadingLabel="Salvando..." loading='true'/>
                        </Col>

                    </Row>

                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs="8" >1 of 1</Col>
                        <Col  className="text-end" xs="4">
                            <Button label="Salvar" loadingLabel="Salvando..." loading='true'/>
                        </Col>

                    </Row>

                </ListGroup.Item>
            </ListGroup>
        </Modal>
    )
}

export default ModalSavePin