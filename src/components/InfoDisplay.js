import react, {useState, useEffect} from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';


function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

const InfoDisplay = props => {
  
    const forceUpdate = useForceUpdate();

    useEffect(()=>{
        forceUpdate()
    },[props.orgChartSource.children.length]);

    return(
        <div>
            <Container>
            <div  className = "info-display">
                <Row>
                    <Col>
                        <Card className = "info-card" bg='success'> 
                            <Card.Header>Direct Number of Reports</Card.Header> 
                            <Card.Body>
                                {/* {this.props.selectedEmployee.reports.length} */}
                                <p> {props.orgChartSource.children.length} </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className = "info-card" bg='success'> 
                            <Card.Header>No.Employees/No.Managers</Card.Header>
                            <Card.Body>
                            <p> 1/{props.orgChartSource.children.length} </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className = "info-card" bg='success'> 
                            <Card.Header>Average Span of Control</Card.Header>
                            <Card.Body>
                                3
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col>
                        <Card className = "info-card" bg='success'> 
                            <Card.Header>Number of Mngrs with less than 3 reports</Card.Header>
                            <Card.Body>
                                4
                            </Card.Body>
                        </Card>
                    </Col> */}
                    {/* <Col>
                        <Card className = "info-card" bg='success'> 
                            <Card.Header>No. Mgr Layers/Mgrs Layer 8+</Card.Header>
                            <Card.Body>
                                4
                            </Card.Body>
                        </Card>
                    </Col> */}
                    <Col>
                        <Card className = "info-card" bg='success'> 
                            <Card.Header>Total Anomalies</Card.Header>
                            <Card.Body>
                                0
                            </Card.Body>
                        </Card>
                    </Col>
                    
                
                    {/* <Col>
                        <div classname = "info-display">
                        1 of 4
                        </div>
                    </Col>
                    <Col>2 of 4</Col>
                    <Col>3 of 4</Col>
                    <Col>4 of 4</Col> */}
                
                </Row>
            </div>
            </Container>
        </div>
    )
}

export default InfoDisplay