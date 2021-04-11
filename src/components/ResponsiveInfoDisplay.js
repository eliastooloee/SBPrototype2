import React, {prevProps} from 'react';
import {Container, Row, Col, Card, Button} from 'react-bootstrap';

export default class InfoDisplay extends React.Component{

    componentDidUpdate(prevProps) {
        if(this.props.orgChartSource.children.length !== prevProps.orgChartSource.children.length) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
            console.log(this.props);
          this.forceUpdate();
        }
      }

     

    render(){
        return(
            <div>
                <Container fluid className = "info-display">
                <div>
                    <Row className = "kpi-header">
                        <Col>
                            Currently showing KPIs for: {this.props.selectedEmployee.name}
                        </Col>
                        <Col>
                            <Button variant="outline-secondary" className="regenerate-kpi-button"
                                onClick={() => {
                                this.forceUpdate();
                                }}>
                                Regenerate KPIs
                            </Button>
                        </Col>
                        
                        <Col>
                            <Button variant="outline-secondary" className="regenerate-kpi-button"
                                onClick={() => {
                                this.props.setManagerListView();
                                }}>
                                Return to Manager List
                            </Button>
                        </Col>
                        
                    </Row>
                    <Row className = "kpi-display">
                        <Col>
                            <Card className = "info-card" > 
                                <Card.Header className = "info-card">Number of Reports</Card.Header> 
                                <Card.Body>
                                    {/* {this.props.selectedEmployee.reports.length} */}
                                    <p> {this.props.orgChartSource.children.length} </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className = "info-card" > 
                                <Card.Header className = "info-card">No.Employees/No.Managers</Card.Header>
                                <Card.Body>
                                <p> 1/{this.props.orgChartSource.children.length} </p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className = "info-card" > 
                                <Card.Header className = "info-card">Avg. Span of Control</Card.Header>
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
                            <Card className = "info-card" > 
                                <Card.Header className = "info-card">Total Anomalies</Card.Header>
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
};