import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card/Card'
import Modal from '../../components/Modal/Modal'
export const HomePage = () => {
    return (
        <div>
            <Modal 
            title="salvar pin" 
            open={true}
            controls = {[
                {
                    label: 'Criar Pastas',
                    variant: 'secondary',
                    onClick:()=>{
                        console.log("clicou")
                    }
                },
                {
                    label: 'Fechar',
                    variant: 'primary',
                    onClick:()=>{
                        console.log("clicou em fechar")
                    }
                }
            ]}
            > 
                <p>Olá</p>
            </Modal>
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