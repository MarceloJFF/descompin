import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '../../components/Card/Card'
export const HomePage = ()=>{
    return(
        <Container fluid> 
            <Row>
                <Col xs={12} md={3}>
                    <Card title="Matemática" image="https://picsum.photos/200/300?53" total={0}/>      
                </Col>
                
                <Col xs={12} md={3}>
                    <Card title="Trigonometria" image="https://picsum.photos/200/300?1" total={2}/>      
                </Col>
                
            </Row>
        </Container>
        
    )
}